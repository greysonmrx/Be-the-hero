import styled from "styled-components";

export const StyledInput = styled.input`
  width: 100%;
  height: 60px;
  color: #333333;
  border: 2px solid #dcdce6;
  border-radius: 8px;
  padding: 0 24px;

  &:focus {
    border-color: #e02041;
    transition: 0.2s ease-out;
  }
`;
