import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const grid = {
  gutterMobile: '18px',
};

const colorNames = {
  alto: '#D9D9D9',
  baliHai: '#82A0B7',
  black: '#000',
  brilliantRose: 'rgba(244, 86, 195, .46)',
  butterflyBush: '#554E8F',
  conifer: '#91DC5A',
  coral: '#FF0000',
  cornflower: '#5F87E7',
  cornflowerBlue: '#F9FCFF',
  cosmos: '#FFCFCF',
  frenchGray: '#C6C6C8',
  gray: '#8E8E8E',
  lavenderPurple: '#8B87B3',
  mineShaft: '#373737',
  nobel: '#B5B5B5',
  redOrange: '#FB3636',
  tundora: '#404040',
  white: '#fff',
};

const colors = {
  ...colorNames,
  bg: colorNames.cornflowerBlue,
  outline: colorNames.coral,
};

const easings = {
  easeInQuart: 'cubic-bezier(0.895, 0.030, 0.685, 0.220)',
};

const fonts = {
  primary: 'Nunito Sans, sans-serif',
  secondary: 'Rubik, sans-serif',
};

export const styles = {
  colors,
  easings,
  fonts,
  grid,
};

export const GlobalStyle = createGlobalStyle`
  ${reset}
`;
