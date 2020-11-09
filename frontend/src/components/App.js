import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Layout from './Layout';

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get('http://localhost:3001/ramens');
      setData(res.data);
    }
    fetchData();
  }, []);

  return (
    <Layout>
      {!data.length && 'LOADING'}
      {!!data.length && (
        <ul>
          {data.map((d) => (
            <li key={d.id}>{d.taste}</li>
          ))}
        </ul>
      )}
    </Layout>
  );
};

export default App;
