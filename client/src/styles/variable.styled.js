import styled, { css } from "styled-components";

export const fontSize = {
  xsmSpacing: "0.25rem",
  smSpacing: "0.5rem",
  smtfSpacing: "0.75rem",
  nlSpacing: "0.875rem",
  mdSpacing: "1rem",
  mdtfSpacing: "1.25rem",
  lgSpacing: "1.5rem",
  lgtfSpacing: "1.75rem",
  xlSpacing: "2rem",
  xxlSpacing: "3rem",

  smLetterSpacing: "1px",
  mdLetterSpacing: "2px",
  lgLetterSpacing: "3px",
  xlLetterSpacing: "4px",

  borderRadius: "0.25rem",
  halfBorderRadius: "50%",
};

export const fontName = {
  poppins: `'Poppins', sans-serif`,
  roboto: `'Roboto',sans-serif`,
  Montserrat: `'Montserrat',sans-serif`,
};

export const size = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",

  maxWidth: "1440px",
  headerHeight: "4.5rem",
};

export const media = {
  sm: `(min-width:${size.sm})`,
  md: `(min-width:${size.md})`,
  lg: `(min-width:${size.lg})`,
  xl: `(min-width:${size.xl})`,
};

export const Container = css`
  padding: 0 ${fontSize.smSpacing};

  @media ${media.md} {
    padding: 0 ${fontSize.lgSpacing};
    font-size: ${fontSize.nlSpacing};
  }
`;

export const HeaderHeight = styled.div`
  height: ${size.headerHeight};
`;

export const btnReset = css`
  padding: 0;
  border: none;
  outline: none;
  color: inherit;
  background: inherit;
  letter-spacing: inherit;
  font-size: inherit;
  font-family: inherit;
  cursor: pointer;
`;

export const iconReset = css``;

export const linkReset = css`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`;
export const flexStart = css`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const flexEnd = css`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const flexBetween = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const flexAlignCenter = css`
  display: flex;
  align-items: center;
`;
