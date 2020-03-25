import React from "react";
import PropTypes from "prop-types";

import { StyledLink } from "./styles";

function Link({ children, ...rest }) {
  return <StyledLink {...rest}>{children}</StyledLink>;
}

export default Link;

Link.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func
  ])
};
