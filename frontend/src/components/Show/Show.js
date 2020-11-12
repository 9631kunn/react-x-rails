import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Wrap = styled.article``;

const Show = () => {
  const { id } = useParams();

  const [data, setData] = useState({});
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(`http://localhost:3001/ramens/${id}`);
      setData(res.data);
    }
    fetchData();
  }, []);

  return (
    <Wrap>
      {data.taste && (
        <>
          <h2>{data.taste}味！</h2>
          <p>制作日: {data.created_at}</p>
        </>
      )}
    </Wrap>
  );
};

export default Show;
