import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrap = styled.div``;

const Lists = ({ data }) => {
  return (
    <Wrap>
      {!data.length && 'LOADING'}
      {!!data.length && (
        <ul>
          {data.map((d) => (
            <li key={d.id}>
              <Link to={`/show/${d.id}`}>{d.taste}</Link>
            </li>
          ))}
        </ul>
      )}
    </Wrap>
  );
};

export default Lists;
