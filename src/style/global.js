import { css } from "@emotion/core";
import { colors } from 'Style/colors';

// insert here global styles, reset, etc.
export const globalStyles = css`
  html {
    box-sizing: border-box;
    -webkit-text-size-adjust: none;
    font-family: Inter, Arial, sans-serif;
    font-weight: 500;
    background-color: ${colors.bg};
    color: ${colors.text};
    scroll-behavior: smooth;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  * {
    margin: 0;
  }
`;
