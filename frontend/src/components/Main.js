import React from 'react';
import styled from 'styled-components';

const container = (props) => props.theme.container.header;
const gapS = (props) => props.theme.gap.s;

const Wrap = styled.main`
  height: 100vh;
  width: 100vw;
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: ${container};
  padding: ${gapS};
  width: 100%;
`;

const Main = ({ children }) => (
  <Wrap>
    <Container>{children}</Container>
  </Wrap>
);

export default Main;
