import { css } from "@emotion/core";
import { colors } from 'Style/colors';

// insert here global styles, reset, etc.
export const globalStyles = css`
  html {
    box-sizing: border-box;
    -webkit-text-size-adjust: none;
    font-size: 87.5%;
    font-family: Inter, Arial, sans-serif;
    font-weight: 500;
    background-color: ${colors.bgMuted};
    color: ${colors.text};
    scroll-behavior: smooth;

    @media (min-width: 50rem) {
      font-size: 100%;
    }

    @supports (font-variation-settings: normal) {
      font-family: 'Inter var', Arial, sans-serif;
    }
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
