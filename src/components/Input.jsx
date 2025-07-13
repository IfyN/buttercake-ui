import React from "react";
import PropTypes from "prop-types";
import { StyledInput } from "./Input.styles";

export default function Input({
  variant = "outline",
  size = "md",
  disabled = false,
  ...props
}) {
  return (
    <StyledInput
      $variant={variant}
      $size={size}
      disabled={disabled}
      {...props}
    />
  );
}

Input.propTypes = {
  variant: PropTypes.oneOf(["outline", "filled", "flushed"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  disabled: PropTypes.bool,
};