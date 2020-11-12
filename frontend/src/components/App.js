import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Layout from './Layout';
import Form from './Form';
import Index from './Index';

const App = () => {
  // INDEX用
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get('http://localhost:3001/ramens');
      setData(res.data);
    }
    fetchData();
  }, []);

  // CREATE用
  const [taste, setTaste] = useState('');
  const handleChange = (e) => {
    e.preventDefault();
    setTaste(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3001/ramens', { taste: taste })
      .then((res) => {
        // INDEXの更新
        const newData = [];
        newData.push(...data, res.data);
        setData(newData);
        // フォームのRESET
        setTaste('');
      })
      .catch((error) => {
        console.log('catch: ', error);
      });
  };

  return (
    <Layout>
      <Form taste={taste} handleChange={handleChange} handleSubmit={handleSubmit} />
      <Index data={data} />
    </Layout>
  );
};

export default App;
