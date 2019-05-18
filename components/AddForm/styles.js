import styled from 'styled-components';

import { styles } from '../../util/constant/styles';

export const FormStyles = styled.form`
  background: ${styles.colors.white};
  overflow: hidden;
  padding: 40px 0 16px;
`;

export const AddFormButton = styled.button`
  -moz-appearance: none;
  -webkit-appearance: none;
  background: transparent;
  border: none;
  margin: 0;
  padding: 0;
  position: absolute;
  right: 12px;
  transition: bottom .2s ease;

  svg {
    border-radius: 50%;
    box-shadow: 0 4px 7px 0 ${styles.colors.brilliantRose};
    transition: transform .2s ${styles.easings.easeInQuart};
    width: 53px;
  }
`;

export const AddFormWrapper = styled.div`
  bottom: 0;
  left: 0;
  position: absolute;
  width: 100%;
  z-index: 9;

  &::before {
    background: ${styles.colors.black};
    content: '';
    height: 1000%;
    left: 0;
    opacity: .1;
    position: absolute;
    top: 0;
    transform: translateY(-40%);
    width: 100%;
    z-index: -1;
  }

  ${props => props.isOpenModal && `
    ${AddFormButton} {
      bottom: calc(100% - 25px);
      z-index: 10;

      svg {
        transform: rotate(45deg);
      }
    }
  `}

  ${props => !props.isOpenModal && `
    ${AddFormButton} {
      bottom: 15px;
    }
  `}

  .showUp-enter {
    transform: translateY(100%);
  }

  .showUp-enter-active {
    transform: translateY(0);
    transition: transform .2s ease;
  }

  .showUp-exit {
    transform: translateY(0);
  }

  .showUp-exit-active {
    transform: translateY(100%);
    transition: transform .2s ease;
  }
`;

export const AddFormHeader = styled.div`
  color: ${styles.colors.tundora};
  font-family: ${styles.fonts.primary};
  font-size: 13px;
  line-height: 14px;
  padding: 0 0 10px;
  text-align: center;
`;

export const FormInput = styled.div`
  padding: 0 20px;

  input {
    background: transparent;
    border: none;
    color: ${styles.colors.mineShaft};
    font-family: ${styles.fonts.primary};
    font-size: 20px;
    font-weight: 600;
    line-height: 25px;
    width: 100%;
  }

  label {
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

export const FormTags = styled.div`
  -webkit-overflow-scrolling: touch;
  display: flex;
  margin-bottom: 43px;
  margin-left: 20px;
  overflow-x: scroll;
  padding: 15px 0;
  position: relative;

  &::after,
  &::before {
    content: '';
    background: ${styles.colors.alto};
    height: 1px;
    left: 0;
    position: absolute;
    width: calc(100% - 15px);
  }

  &::after {
    top: 0;
  }

  &::before {
    bottom: 0;
  }
`;

export const FormTag = styled.div`
  margin: auto 15px;
  position: relative;
  transition: margin .2s ${styles.easings.easeInQuart};

  &::before {
    background: ${props => props.color};
    content: '';
    
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: 
      height .2s ease,
      border-radius .1s ease,
      width .2s ease,
      left .2s ease;
  }

  input {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;

    &:focus + label {
      outline: 5px auto ${styles.colors.outline};
      outline: 5px auto -webkit-focus-ring-color;
    }
  }

  label {
    color: ${styles.colors.gray};
    font-family: ${styles.fonts.primary};
    font-size: 15px;
    line-height: 26px;
  }

  ${props => props.isChecked && `
    margin: auto 20px auto 10px;

    &::before {
      border-radius: 5px;
      box-shadow: 0 4px 7px 0 ${props.color};
      height: 100%;
      left: -10px;
      padding: 0 10px;
      width: 100%;
    }

    label {
      position: relative;
      color: ${styles.colors.white};
    }
  `};

  ${props => !props.isChecked && `
    &::before {
      border-radius: 50%;
      height: 10px;
      left: -15px;
      width: 10px;
    }
  `};
`;
export const DataPickerHeader = styled.div`
  padding: 0 0 10px;

  p {
    color: ${styles.colors.tundora};
    cursor: pointer;
    display: inline-block;
    font-family: ${styles.fonts.primary};
    font-size: 13px;
    line-height: 18px;
    position: relative;
    text-align: left;

    &:focus {
      outline: 5px auto ${styles.colors.outline};
      outline: 5px auto -webkit-focus-ring-color;
    }

    &::after {
      content: '';
      border: solid ${styles.colors.tundora};
      border-width: 0 2px 2px 0;
      display: inline-block;
      margin: 0 0 2px 13px;
      padding: 2.5px;
      transform: rotate(45deg);
    }
  }
`;

export const FormDataPicker = styled.div`
  padding: 0 0 45px 20px;

  input {
    border: none;
    color: ${styles.colors.tundora};
    cursor: default;
    cursor: pointer;
    font-family: ${styles.fonts.primary};
    font-size: 13px;
    line-height: 18px;
    margin: 0;
    outline: none;
    padding: 0 0 10px;
    padding: 0 0 40px;
    padding: 0;
    pointer-events: none;
    text-align: left;
    user-select: none;
  }
`;

export const SubmitButtonWrapper = styled.div`
  margin: 0 26px;
`;

export const SubmitButton = styled.button`
  -moz-appearance: none;
  -webkit-appearance: none;
  background: ${styles.colors.cornflower};
  border-radius: 7px;
  border: none;
  box-shadow: 0 4px 7px 0 ${styles.colors.cornflower};
  color: ${styles.colors.white};
  cursor: pointer;
  font-family: ${styles.fonts.primary};
  font-size: 18px;
  line-height: 24px;
  padding: 15px 0 14px;
  text-align: center;
  transition: transform .2s ease;
  width: 100%;
  
  &:hover {
    transform: scale(1.02);
  }
`;

