import React from 'react';
import styled from 'styled-components';

const container = (props) => props.theme.container.header;
const colorMain = (props) => props.theme.color.main;
const colorWhite = (props) => props.theme.color.white;
const gapS = (props) => props.theme.gap.s;

const Wrap = styled.header`
  background: ${colorMain};
  box-shadow: 0 1px 10px hsl(0 0% 0% / 20%);
  height: 80px;
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: ${container};
  width: 100%;
  h1 {
    color: ${colorWhite};
    font: 20px monospace;
    line-height: 80px;
    margin: 0 ${gapS};
  }
`;

const Header = () => (
  <Wrap>
    <Container>
      <h1>RAMEN</h1>
    </Container>
  </Wrap>
);

export default Header;