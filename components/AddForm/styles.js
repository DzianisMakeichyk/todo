import styled from 'styled-components';

import { styles } from '../../util/constant/styles';

export const FormStyles = styled.form`
  padding: 40px 0 16px;
  background: ${styles.colors.white};
  overflow: hidden;
`;

export const AddFormButton = styled.button`
  -webkit-appearance: none;
  -moz-appearance: none;
  border: none;
  padding: 0;
  margin: 0;
  position: absolute;
  right: 12px;
  background: transparent;

  svg {
    border-radius: 50%;
    box-shadow: 0 4px 7px 0 ${styles.colors.brilliantRose};
    width: 53px;
  }
`;

export const AddFormWrapper = styled.div`
  position: relative;

  ${props => props.isOpenModal && `
    ${AddFormButton} {
      top: -28px;

      svg {
        transform: rotate(45deg);
      }
    }
  `}

  ${props => !props.isOpenModal && `
    ${AddFormButton} {
      bottom: 25px;
    }
  `}
`;

export const AddFormHeader = styled.div`
  font-family: ${styles.fonts.primary};
  color: ${styles.colors.tundora};
  font-size: 13px;
  line-height: 14px;
  padding: 0 0 10px;
  text-align: center;
`;

export const FormInput = styled.div`
  padding: 0 20px;

  input {
    width: 100%;
    border: none;
    color: ${styles.colors.mineShaft};
    font-size: 20px;
    line-height: 25px;
    font-family: ${styles.fonts.primary};
    font-weight: 600;
    background: transparent;
  }

  label {
    position: absolute;
    overflow: hidden;
    height: 1px;
    width: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
    clip: rect(0 0 0 0);
  }
`;

export const FormTags = styled.div`
  padding: 15px 0;
  margin-left: 20px;
  margin-bottom: 43px;
  position: relative;
  display: flex;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;

  &::after,
  &::before {
    content: '';
    position: absolute;
    left: 0;
    width: calc(100% - 15px);
    height: 1px;
    background: ${styles.colors.alto};
  }

  &::after {
    top: 0;
  }

  &::before {
    bottom: 0;
  }
`;

export const FormTag = styled.div`
  padding: 0 0 0 15px;
  margin-right: 15px;
  position: relative;

  input {
    position: absolute;
    overflow: hidden;
    height: 1px;
    width: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
    clip: rect(0 0 0 0);

    &:focus + label {
      outline: 5px auto ${styles.colors.outline};
      outline: 5px auto -webkit-focus-ring-color;
    }
  }

  label {
    font-size: 15px;
    line-height: 26px;
    font-family: ${styles.fonts.primary};
    color: ${styles.colors.gray};
  }

  ${props => props.isChecked && `
    background: ${props.color};
    border-radius: 5px;
    box-shadow: 0 4px 7px 0 ${props.color};
    padding: 0 15px;

    label {
      color: ${styles.colors.white};
    }
  `};

  ${props => !props.isChecked && `
      &::before {
      content: '';
      width: 10px;
      height: 10px;
      background: ${props.color};
      border-radius: 50%;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  `};
`;
export const DataPickerHeader = styled.div`
  padding: 0 0 10px;

  p {
    display: inline-block;
    font-family: ${styles.fonts.primary};
    color: ${styles.colors.tundora};
    font-size: 13px;
    line-height: 18px;
    text-align: left;
    cursor: pointer;
    position: relative;

    &:focus {
      outline: 5px auto ${styles.colors.outline};
      outline: 5px auto -webkit-focus-ring-color;
    }

    &::after {
      content: '';
      border: solid ${styles.colors.tundora};
      border-width: 0 2px 2px 0;
      margin: 0 0 2px 13px;
      display: inline-block;
      padding: 2.5px;
      transform: rotate(45deg);
    }
  }
`;

export const FormDataPicker = styled.div`
  padding: 0 0 0 20px;

  input {
    font-family: ${styles.fonts.primary};
    color: ${styles.colors.tundora};
    font-size: 13px;
    line-height: 18px;
    padding: 0 0 10px;
    text-align: left;
    cursor: pointer;
  }

  input {
    -khtml-user-select: none;
    -webkit-user-select: none;
    -moz-user-select: -moz-none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
    cursor: default;
    outline: none;
    border: none;
    padding: 0;
    margin: 0;
    pointer-events: none;
    padding: 0 0 40px;
  }
`;

export const SubmitButtonWrapper = styled.div`
  margin: 0 26px;
`;

export const SubmitButton = styled.button`
  width: 100%;
  background: ${styles.colors.cornflower};
  box-shadow: 0 4px 7px 0 ${styles.colors.cornflower};
  color: ${styles.colors.white};
  border-radius: 7px;
  padding: 15px 0 14px;
  text-align: center;
  font-family: ${styles.fonts.primary};
  font-size: 18px;
  line-height: 24px;
  -webkit-appearance: none;
  -moz-appearance: none;
  border: none;
`;

