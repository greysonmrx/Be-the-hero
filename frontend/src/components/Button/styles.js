import styled from "styled-components";
import { darken } from "polished";

export const StyledButton = styled.button`
  width: 100%;
  height: 60px;
  background: #e02041;
  border: 0;
  border-radius: 8px;
  color: #ffffff;
  font-weight: 700;
  margin-top: 16px;
  transition: background 0.2s;
  display: inline-block;
  text-decoration: none;
  font-size: 18px;
  line-height: 60px;

  &:hover {
    background: ${darken(0.1, "#e02041")};
  }
`;
