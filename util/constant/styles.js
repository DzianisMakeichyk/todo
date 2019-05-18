import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const grid = {
  gutterMobile: '18px',
};

const colorNames = {
  alto: '#D9D9D9',
  black: '#000',
  butterflyBush: '#554E8F',
  cornflowerBlue: '#F9FCFF',
  cosmos: '#FFCFCF',
  frenchGray: '#C6C6C8',
  gold: '#FFD506',
  gray: '#8E8E8E',
  green: '#1ED102',
  lavenderPurple: '#8B87B3',
  nobel: '#B5B5B5',
  razzmatazz: '#D10263',
  redOrange: '#FB3636',
  royalBlue: '#3044F2',
  white: '#fff',
  conifer: '#91DC5A',
  baliHai: '#82A0B7',
  tundora: '#404040',
  mineShaft: '#373737',
  cornflower: '#5F87E7',
  coral: '#FF0000',
  brilliantRose: 'rgba(244, 86, 195, .46)',
};

const colors = {
  ...colorNames,
  bg: colorNames.cornflowerBlue,
  outline: colorNames.coral,
};

const easings = {
  easeInQuart: 'cubic-bezier(0.895, 0.030, 0.685, 0.220)',
  easeOutQuad: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
  easeOutQuart: 'cubic-bezier(0.165, 0.840, 0.440, 1.000)',
};

const fonts = {
  primary: 'Nunito Sans, sans-serif',
  secondary: 'Rubik, sans-serif',
};

export const styles = {
  colors,
  easings,
  grid,
  fonts,
};

export const GlobalStyle = createGlobalStyle`
  ${reset}
`;