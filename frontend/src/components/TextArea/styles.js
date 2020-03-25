import styled from "styled-components";

export const StyledTextArea = styled.textarea`
  width: 100%;
  min-height: 140px;
  color: #333333;
  border: 2px solid #dcdce6;
  border-radius: 8px;
  padding: 16px 24px;
  line-height: 24px;
  resize: vertical;

  &:focus {
    border-color: #e02041;
    transition: 0.2s ease-out;
  }
`;
