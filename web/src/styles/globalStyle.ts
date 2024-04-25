'use client';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  a{
    text-decoration: none;
    color: inherit;
  }
  *{
    box-sizing: border-box;
  }
  html, body, div, span, h1, h2, h3, h4, h5, h6, p,
  a, dl, dt, dd, ol, ul, li, form, label, table{
    margin: 0;
    padding: 0;
    border: 0;
    /* font-size: 10px; */
    vertical-align: baseline;
  }
  body{
    // TODO: 레이아웃으로 옮겨야하는값
    /* background-color: #f4f4f4; */
    max-width: 1920px;
    height: 100vh;
  }
  ol, ul{
    list-style: none;
  }
  button {
    border: 0;
    background: transparent;
    cursor: pointer;
  }
`;

export default GlobalStyles;
