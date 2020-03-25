import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;

  header {
    display: flex;
    align-items: center;

    span {
      font-size: 20px;
      margin-left: 24px;
    }

    img {
      height: 64px;
    }

    a {
      width: 260px;
      height: 60px;
      background: #e02041;
      border: 0;
      border-radius: 8px;
      color: #ffffff;
      font-weight: 700;
      transition: background 0.2s;
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      font-size: 18px;
      line-height: 60px;
      margin-left: auto;

      &:hover {
        background: ${darken(0.1, "#e02041")};
      }
    }

    button {
      height: 60px;
      width: 60px;
      border-radius: 8px;
      border: 2px solid #dcdce6;
      background: transparent;
      margin-left: 16px;
      transition: border-color 0.2s;

      &:hover {
        border-color: #e02041;
      }
    }
  }

  h1 {
    margin-top: 80px;
    margin-bottom: 24px;
  }

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 24px;
    list-style: none;

    li {
      background: #ffffff;
      padding: 24px;
      border-radius: 8px;
      position: relative;

      p {
        color: #737380;
        line-height: 21px;
        font-size: 16px;
      }

      strong {
        display: block;
        margin-bottom: 16px;
        color: #41414d;

        &:not(:first-child) {
          margin-top: 32px;
        }
      }

      button {
        position: absolute;
        right: 24px;
        top: 24px;
        border: 0;
        background: transparent;
        transition: opacity 0.2s;

        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
`;
