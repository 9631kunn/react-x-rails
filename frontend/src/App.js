import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState({ res: [] });
  useEffect(() => {
    async function fetchData() {
      const res = axios('http://localhost:3001/ramens');
      setData(res);
    }
    fetchData();
  }, []);

  return <p>{data ? 'LOADING' : data.res}</p>;
};

export default App;
