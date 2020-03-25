import React from "react";

import { StyledTextArea } from "./styles";

function TextArea({ ...rest }) {
  return <StyledTextArea {...rest} />;
}

export default TextArea;
