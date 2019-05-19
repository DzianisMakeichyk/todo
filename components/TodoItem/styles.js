import styled from 'styled-components';

import { styles } from '../../util/constant/styles';

export const InputRadio = styled.div`
  input {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin-bottom: 15px;
    overflow: hidden;
    position: absolute;
    width: 1px;

    &:focus + label {
      outline: 5px auto ${styles.colors.outline};
      outline: 5px auto -webkit-focus-ring-color;
    }
  }

  label {
    border-radius: 50%;
    border: 2px solid ${styles.colors.nobel};
    cursor: pointer;
    display: block;
    height: 14px;
    overflow: hidden;
    position: relative;
    transition: border .2s ${styles.easings.easeInQuart};
    width: 14px;

    &::after,
    &::before {
      content: '';
      opacity: 0;
      position: absolute;
      transition: opacity .2s ${styles.easings.easeInQuart};
    }

    &::after {
      background: ${styles.colors.conifer};
      height: 100%;
      left: 0;
      top: 0;
      width: 100%;
    }

    &::before {
      border-radius: 1.5px;
      border-right: 2px solid ${styles.colors.white};
      border-top: 2px solid ${styles.colors.white};
      height: 8px;
      left: 1.5px;
      top: 7.5px;
      transform-origin: left top;
      transform: scaleX(-1) rotate(135deg);
      width: 4px;
      z-index: 10;
    }
  }
`;

export const ItemContent = styled.p`
  -webkit-overflow-scrolling: touch;
  display: inline-block;
  font-family: ${styles.fonts.primary};
  font-size: 14px;
  height: 19px;
  line-height: 19px;
  margin-right: 18px;
  overflow-x: scroll;
  padding: 0 0 0 15px;
  position: relative;
  width: 100%;

  & > span {
    color: ${styles.colors.butterflyBush};
    position: absolute;
    transform: translateX(0);
    transition: color .2s ease;
    white-space: nowrap;

    &::before {
      background: ${styles.colors.alto};
      content: '';
      height: 1px;
      left: -3%;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      transition: width .2s ease;
      width: 0;
    } 
  }
`;

export const ItemIcon = styled.div`
  cursor: pointer;
  margin: auto 0 auto auto;
  position: relative;

  &::before {
    background: ${styles.colors.cosmos};
    border-radius: 50%;
    content: '';
    height: 27px;
    opacity: 0;
    position: absolute;
    right: -7px;
    top: -7px;
    transition: opacity .2s ${styles.easings.easeInQuart};
    width: 27px;
  }

  &:hover {
    &::before {
      opacity: 1;
    }

    svg {
      fill: ${styles.colors.redOrange};
    }
  }

  svg {
    fill: ${styles.colors.alto};
    position: relative;
    transition: fill .2s ${styles.easings.easeInQuart};
    width: 13px;
  }

  span {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
`;

export const Item = styled.li`
  align-items: center;
  background-color: ${styles.colors.white};
  border-radius: 5px;
  box-shadow: 0 4px 9px 0 rgba(241, 241, 241, 1);
  box-sizing: border-box;
  display: flex;
  margin-bottom: 14px;
  overflow: hidden;
  padding: 18px 18px 18px 15px;
  position: relative;
  transition: transform .2s ease;

  &::before {
    background-color: ${props => props.color};
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 4px;
  }

  &:hover {
    transform: translateY(-2px);
  }

  &:focus {
    outline: 5px auto ${styles.colors.outline};
    outline: 5px auto -webkit-focus-ring-color;
  }

  time {
    color: ${styles.colors.frenchGray};
    font-family: ${styles.fonts.primary};
    font-size: 11px;
    line-height: 15px;
    padding: 0 0 0 11px;
    text-transform: uppercase;
  }

  ${props => props.isChecked && `
    ${ItemContent} {
      label {
        color: ${styles.colors.alto};

        &::before {
          width: 105%;
        } 
      } 
    }

    ${InputRadio} {
      label {
        border: 2px solid ${styles.colors.conifer};

        &::after,
        &::before {
          opacity: 1;
        }
      }
    }
  `}
`;
