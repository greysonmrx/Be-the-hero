import { createGlobalStyle } from "styled-components";

import "react-toastify/dist/ReactToastify.css";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 14px;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    background: #f0f0f5;
    -webkit-font-smoothing: antialiased;
  }

  input, button, textarea {
    font-size: 18px;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
  } 

  button {
    cursor: pointer;
  }
`;
