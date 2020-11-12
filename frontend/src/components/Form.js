import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const gapS = (props) => props.theme.gap.s;
const gapM = (props) => props.theme.gap.m;
const container = (props) => props.theme.container.main;
const colorMain = (props) => props.theme.color.main;

const Wrap = styled.form`
  display: grid;
  gap: ${gapS};
  grid-template-columns: 1fr 200px;
  margin: 0 auto ${gapM};
  max-width: ${container};
  width: 100%;
  input {
    background: #efefef;
    border-radius: 3px;
    padding: ${gapS};
  }
  button {
    background: ${colorMain};
    border-radius: 3px;
    color: #fff;
    font-weight: bold;
    &:hover {
      opacity: 0.7;
    }
  }
`;

const Form = ({ taste, handleSubmit, handleChange }) => {
  return (
    <Wrap onSubmit={handleSubmit}>
      <input type="text" value={taste} onChange={handleChange} placeholder="新メニュー" />
      <button type="submit">SUBMIT</button>
    </Wrap>
  );
};

export default Form;
