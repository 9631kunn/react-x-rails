import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import ramen from '../../images/ramen.svg';
import refresh from '../../images/refreshing.svg';

const gapM = (props) => props.theme.gap.m;
const colorMain = (props) => props.theme.color.main;
const colorSub = (props) => props.theme.color.sub;

const Wrap = styled.article``;

const Grid = styled.div`
  display: grid;
  gap: ${gapM};
  grid-template-areas:
    'title title'
    'image image'
    'info info'
    'button1 button2';
  h2 {
    color: ${colorMain};
    font-size: 30px;
    grid-area: title;
    text-align: center;
  }
  form {
    grid-area: title;
    position: relative;
    input {
      background: #efefef;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      border-bottom: 2px solid #ccc;
      color: ${colorMain};
      font-size: 30px;
      font-weight: bold;
      padding: 5px;
      text-align: center;
      width: 100%;
    }
    button {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      img {
        height: 20px;
        width: 20px;
      }
    }
  }
  img {
    grid-area: image;
    height: 100px;
    margin: auto;
    width: 100px;
  }
  p {
    border: 2px solid ${colorSub};
    grid-area: info;
    padding: 1em;
  }
  .button {
    border-radius: 30px;
    box-shadow: 0 3px 5px -3px rgba(0, 0, 0, 0.59);
    color: #fff;
    font-size: 16px;
    padding: 1em 0;
    transition: 0.3s;
    width: 100%;
    &:hover {
      box-shadow: 0 5px 10px -3px rgba(0, 0, 0, 0.59);
      transform: translateY(-2px);
    }
  }
  .button__edit {
    background: linear-gradient(-45deg, ${colorMain}, ${colorSub});
    grid-area: button1;
  }
  .button__delete {
    background: linear-gradient(-45deg, #222, #666);
    grid-area: button2;
  }
`;

const Show = () => {
  // データ取得用
  const { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(`http://localhost:3001/ramens/${id}`);
      setData(res.data);
    }
    fetchData();
  }, []);

  // データ編集用
  const [newData, setNewData] = useState(data.taste);
  const [editable, setEditable] = useState(false);

  const handleEditableChange = () => {
    setNewData(data.taste); // 最新状態をsetする
    setEditable(!editable);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setNewData(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .patch(`http://localhost:3001/ramens/${id}`, { taste: newData })
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log('error: ', error);
      });
    setEditable(false); // 編集モード終了
  };

  return (
    <Wrap>
      {data && (
        <Grid>
          {!editable && <h2>{data.taste}味！</h2>}
          {editable && (
            <form onSubmit={handleSubmit}>
              <input type="text" onChange={handleChange} value={newData} />
              <button type="submit">
                <img src={refresh} alt="更新するボタンロゴ" />
              </button>
            </form>
          )}
          <img src={ramen} alt="ラーメン" />
          <p>
            ラーメン番号: {data.id} / 制作日: {data.created_at}
          </p>
          <button className="button button__edit" onClick={handleEditableChange}>
            {editable ? '編集をやめる' : '編集する'}
          </button>
          <button className="button button__delete">削除する</button>
        </Grid>
      )}
    </Wrap>
  );
};

export default Show;
