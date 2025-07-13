import styled, { css } from "styled-components";
import { themeToken } from "../themeToken";

const variantStyles = {
  primary: css`
    background-color: ${themeToken.colors.button.primaryBg};
    color: ${themeToken.colors.button.primaryText};
    border: none;
    &:hover:enabled {
      background-color: ${themeToken.colors.button.primaryHover};
    }
  `,
  secondary: css`
    background-color: ${themeToken.colors.button.secondaryBg};
    color: ${themeToken.colors.button.secondaryText};
    border: none;
    &:hover:enabled {
      background-color: ${themeToken.colors.button.secondaryHover};
    }
  `,
  outline: css`
    background-color: ${themeToken.colors.button.outlineBg};
    color: ${themeToken.colors.button.outlineText};
    border: 2px solid ${themeToken.colors.button.outlineBorder};
    &:hover:enabled {
      background-color: ${themeToken.colors.button.outlineHover};
    }
  `,
  ghost: css`
    background-color: transparent;
    color: ${themeToken.colors.button.outlineText};
    border: none;
    &:hover:enabled {
      background-color: ${themeToken.colors.gray100};
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
  `,
};

const disabledStyles = css`
  background-color: ${themeToken.colors.button.disabledBg} !important;
  color: ${themeToken.colors.button.disabledText} !important;
  border: 2px solid ${themeToken.colors.button.disabledBorder} !important;
  cursor: not-allowed;
  opacity: 0.6;
  box-shadow: none;
`;

export const StyledButton = styled.button`
  transition: background-color 0.2s;
  cursor: pointer;
  ${(props) => variantStyles[props.$variant || "primary"]}
  ${(props) => sizeStyles[props.$size || "md"]}
  ${(props) => props.disabled && disabledStyles}
`;

// import styled, { css } from "styled-components";

// const variantStyles = {
//   primary: css`
//     background-color: #3182ce;
//     color: white;
//     border: none;
//     &:hover:enabled {
//       background-color: #2b6cb0;
//     }
//   `,
//   secondary: css`
//     background-color: #e2e8f0;
//     color: #2d3748;
//     border: none;
//     &:hover:enabled {
//       background-color: #cbd5e1;
//     }
//   `,
//   outline: css`
//     background-color: transparent;
//     color: #3182ce;
//     border: 2px solid #3182ce;
//     &:hover:enabled {
//       background-color: #ebf8ff;
//     }
//   `,
// };

// const sizeStyles = {
//   sm: css`
//     padding: 4px 12px;
//     font-size: 14px;
//   `,
//   md: css`
//     padding: 8px 20px;
//     font-size: 16px;
//   `,
//   lg: css`
//     padding: 12px 28px;
//     font-size: 18px;
//   `,
// };

// // const disabledStyles = css`
// //   background-color: #e2e8f0 !important;
// //   color: #a0aec0 !important;
// //   border: none !important;
// //   cursor: not-allowed;
// //   opacity: 0.6;
// //   box-shadow: none;
// //     ${(props) => props.disabled && disabledStyles}
// // `;

// export const StyledButton = styled.button`
//   border-radius: 4px;
//   cursor: pointer;
//   transition: background-color 0.2s;

//   ${(props) => variantStyles[props.$variant || "primary"]}
//   ${(props) => sizeStyles[props.$size || "md"]}
// `;
