import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    <>
      {!data.length && 'LOADING'}
      {!!data.length && (
        <ul>
          {data.map((d) => (
            <li key={d.id}>{d.taste}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default App;
