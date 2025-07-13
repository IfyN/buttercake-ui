import styled, { css } from "styled-components";
import { themeToken } from "../themeToken";

const typeStyles = {
  info: css`
    background-color: ${themeToken.colors.alert.infoBg};
    color: ${themeToken.colors.alert.infoText};
    border: 1px solid ${themeToken.colors.alert.border};
  `,
  success: css`
    background-color: ${themeToken.colors.alert.successBg};
    color: ${themeToken.colors.alert.successText};
    border: 1px solid ${themeToken.colors.alert.border};
  `,
  warning: css`
    background-color: ${themeToken.colors.alert.warningBg};
    color: ${themeToken.colors.alert.warningText};
    border: 1px solid ${themeToken.colors.alert.border};
  `,
  error: css`
    background-color: ${themeToken.colors.alert.errorBg};
    color: ${themeToken.colors.alert.errorText};
    border: 1px solid ${themeToken.colors.alert.border};
  `,
};

const disabledStyles = css`
  background-color: ${themeToken.colors.alert.disabledBg} !important;
  color: ${themeToken.colors.alert.disabledText} !important;
  border: 1px solid ${themeToken.colors.alert.border} !important;
  opacity: 0.6;
`;

export const StyledAlert = styled.div`
  padding: ${themeToken.spacing.sm} ${themeToken.spacing.md};
  border-radius: ${themeToken.borderRadius.md};
  font-size: ${themeToken.fontSize.md};
  margin: ${themeToken.spacing.sm} 0;
  ${(props) => typeStyles[props.$type || "info"]}
  ${(props) => props.disabled && disabledStyles}
`;

// import styled, { css } from "styled-components";

// const typeStyles = {
//   info: css`
//     background-color: #e7f3fe;
//     color: #2176bd;
//     border: 1px solid #b3d8fd;
//   `,
//   success: css`
//     background-color: #e6f9ed;
//     color: #218838;
//     border: 1px solid #b7ebc6;
//   `,
//   warning: css`
//     background-color: #fffbe6;
//     color: #856404;
//     border: 1px solid #ffe58f;
//   `,
//   error: css`
//     background-color: #fdecea;
//     color: #a71d2a;
//     border: 1px solid #f5c6cb;
//   `,
// };

// export const StyledAlert = styled.div`
//   padding: 12px 20px;
//   border-radius: 4px;
//   font-size: 1rem;
//   margin: 10px 0;
//   ${(props) => typeStyles[props.$type || "info"]}
// `;
