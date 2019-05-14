import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const fontConfig = `
  @font-face {
    font-family: 'Montserrat-Medium';
    src: url('/static/fonts/Montserrat/Medium.eot');
    src: url('/static/fonts/Montserrat/Medium.eot?#iefix') format('embedded-opentype'),
    url('/static/fonts/Montserrat/Medium.woff2') format('woff2'),
    url('/static/fonts/Montserrat/Medium.woff') format('woff');
    font-weight: normal;
  }
`;

const grid = {
  gutterMobile: '20px',
};

const colorNames = {
  black: '#000',
  white: '#fff',
};

const colors = {
  ...colorNames,
  primary: colorNames.black,
};

const fonts = {
  primary: 'Montserrat-Medium',
};

const easings = {
  easeInQuart: 'cubic-bezier(0.895, 0.030, 0.685, 0.220)',
  easeOutQuad: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
  easeOutQuart: 'cubic-bezier(0.165, 0.840, 0.440, 1.000)',
};

export const styles = {
  colors,
  easings,
  fonts,
  grid,
};

export const GlobalStyle = createGlobalStyle`
  ${reset}
  ${fontConfig}
`;