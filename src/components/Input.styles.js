import styled, { css } from "styled-components";
import { themeToken } from "../themeToken";

const variantStyles = {
  outline: css`
    background-color: ${themeToken.colors.white};
    color: ${themeToken.colors.gray700};
    border: 2px solid ${themeToken.colors.sapphire};
    &:focus {
      border-color: ${themeToken.colors.amethyst};
      outline: none;
    }
  `,
  filled: css`
    background-color: ${themeToken.colors.gray100};
    color: ${themeToken.colors.gray700};
    border: 2px solid ${themeToken.colors.emerald};
    &:focus {
      border-color: ${themeToken.colors.topaz};
      outline: none;
    }
  `,
  flushed: css`
    background-color: transparent;
    color: ${themeToken.colors.gray700};
    border: none;
    border-bottom: 2px solid ${themeToken.colors.emerald};
    border-radius: 0;
    &:focus {
      border-bottom-color: ${themeToken.colors.amethyst};
      outline: none;
    }
  `,
};

const sizeStyles = {
  sm: css`
    padding: ${themeToken.spacing.xs} ${themeToken.spacing.sm};
    font-size: ${themeToken.fontSize.sm};
    border-radius: ${themeToken.borderRadius.sm};
  `,
  md: css`
    padding: ${themeToken.spacing.sm} ${themeToken.spacing.md};
    font-size: ${themeToken.fontSize.md};
    border-radius: ${themeToken.borderRadius.md};
  `,
  lg: css`
    padding: ${themeToken.spacing.md} ${themeToken.spacing.lg};
    font-size: ${themeToken.fontSize.lg};
    border-radius: ${themeToken.borderRadius.lg};
    border: 2px solid ${themeToken.colors.topaz};
    &:focus {
      border-color: ${themeToken.colors.amethyst};
      outline: none;
    }
  `,
};

const disabledStyles = css`
  background-color: ${themeToken.colors.button.disabledBg} !important;
  color: ${themeToken.colors.button.disabledText} !important;
  border: 2px solid ${themeToken.colors.button.disabledBorder} !important;
  cursor: not-allowed;
  opacity: 0.6;
`;

export const StyledInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  transition: border-color 0.2s;
  ${(props) => variantStyles[props.$variant || "outline"]}
  ${(props) => sizeStyles[props.$size || "md"]}
  ${(props) => props.disabled && disabledStyles}
  &:focus {
    box-shadow: 0 0 0 1px ${themeToken.colors.sapphire};
  }
`;
