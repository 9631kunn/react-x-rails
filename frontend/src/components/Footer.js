import React from 'react';
import styled from 'styled-components';

const container = (props) => props.theme.container.footer;
const colorSub = (props) => props.theme.color.sub;
const gapS = (props) => props.theme.gap.s;

const Wrap = styled.footer`
  background: ${colorSub};
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: ${container};
  padding: ${gapS} 0;
  width: 100%;
  p {
    font: 12px monospace;
    text-align: center;
  }
`;

const Footer = () => (
  <Wrap>
    <Container>
      <p>COPY RIGHT UNKO</p>
    </Container>
  </Wrap>
);

export default Footer;
