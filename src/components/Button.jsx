import React from "react";
import PropTypes from "prop-types";
import { StyledButton } from "./Button.styles";

export default function Button({
  label,
  variant = "primary",
  size = "md",
  //disabled = false,
  onClick,
  ...props
}) {
  return (
    <StyledButton
      $variant={variant}
      $size={size}
      // disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {label}
    </StyledButton>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary", "outline"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  onClick: PropTypes.func,
  // disabled: PropTypes.bool,
};