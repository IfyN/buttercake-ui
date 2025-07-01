import React from "react";
import PropTypes from "prop-types";
import { StyledButton } from "./Button.styles";

export default function Button({ label, variant = "primary", onClick,  ...props }) {
  return (
    <StyledButton $variant={variant} onClick={onClick} {...props}>
      {label}
    </StyledButton>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary"]),
  onClick: PropTypes.func,
};