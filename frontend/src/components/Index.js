import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div``;

const Index = ({ data }) => {
  return (
    <Wrap>
      {!data.length && 'LOADING'}
      {!!data.length && (
        <ul>
          {data.map((d) => (
            <li key={d.id}>{d.taste}</li>
          ))}
        </ul>
      )}
    </Wrap>
  );
};

export default Index;
