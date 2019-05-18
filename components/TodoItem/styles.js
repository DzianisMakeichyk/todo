import styled from 'styled-components';

import { styles } from '../../util/constant/styles';

export const Item = styled.li`
  border-radius: 5px;
  box-shadow: 0 4px 9px 0 rgba(241,241,241,1);
  overflow: hidden;
  padding: 18px 18px 18px 15px;
  background-color: ${styles.colors.white};
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 14px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background-color: ${props => props.color};
  }

  time {
    text-transform: uppercase;
    color: ${styles.colors.frenchGray};
    font-family: ${styles.fonts.primary};
    font-size: 11px;
    line-height: 15px;
    padding: 0 0 0 11px;
  }
`;

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

    &:checked + label {
      border: 2px solid ${styles.colors.conifer};

      &::after,
      &::before {
        opacity: 1;
      }
    }
  }

  &:hover {
    label {
      border: 2px solid ${styles.colors.conifer};

      &::after,
      &::before {
        opacity: 1;
      }
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
  height: 19px;
  display: inline-block;
  width: 100%;
  font-family: ${styles.fonts.primary};
  font-size: 14px;
  line-height: 19px;
  padding: 0 0 0 15px;
  margin-right: 18px;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  position: relative;

  & > span {
    color: ${styles.colors.butterflyBush};
    position: absolute;
    white-space: nowrap;
    transform: translateX(0);
  }

  ${props => props.isChecked && `
    span {
      color: ${styles.colors.alto};

      &::before {
        content: '';
        position: absolute;
        width: 105%;
        height: 1px;
        left: -3%;
        top: 50%;
        transform: translateY(-50%);
        background: ${styles.colors.alto};
      } 
    }
  `}
`;

export const ItemIcon = styled.div`
  margin: auto 0 auto auto;
  cursor: pointer;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -7px;
    right: -7px;
    border-radius: 50%;
    width: 27px;
    height: 27px;
    background: ${styles.colors.cosmos};
    opacity: 0;
    transition: opacity .2s ${styles.easings.easeInQuart};
  }

  svg {
    width: 13px;
    fill: ${styles.colors.alto};
    position: relative;
    transition: fill .2s ${styles.easings.easeInQuart};
  }

  &:hover {
    &::before {
      opacity: 1;
    }

    svg {
      fill: ${styles.colors.redOrange};
    }
  }
`;
