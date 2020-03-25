import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  padding: 96px;
  background: #f0f0f5;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  justify-content: space-between;

  section {
    width: 100%;
    max-width: 380px;

    h1 {
      margin: 64px 0 32px;
      font-size: 32px;
    }

    p {
      font-size: 18px;
      color: #737380;
      line-height: 32px;
    }
  }

  form {
    width: 100%;
    max-width: 450px;

    input,
    textarea {
      margin-top: 8px;
    }
  }
`;

export const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  a {
    width: 300px;
    height: 60px;
    background: transparent;
    border: 2px solid #dcdce6;
    border-radius: 8px;
    font-weight: 700;
    transition: border-color 0.2s;
    display: flex;
    color: #333333;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-size: 18px;
    line-height: 60px;
    margin-top: 16px;
    margin-right: 8px;

    &:hover {
      border-color: ${darken(0.2, "#dcdce6")};
    }
  }
`;
