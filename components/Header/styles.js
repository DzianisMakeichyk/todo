import styled from 'styled-components';

import { styles } from '../../util/constant/styles';

export const HeaderWrapper = styled.header`
  background-image: url('../../static/background.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 44px ${styles.grid.gutterMobile} 0;
`;

export const HeaderContent = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 11px 0 13px;
`;

export const UserInfo = styled.div`
  color: ${styles.colors.white};
  font-family: ${styles.fonts.primary};

  p {
    font-size: 18px;
  }

  span {
    font-size: 10px;
    line-height: 14px;
  }
`;
export const UserAvatar = styled.div`
  border-radius: 50%;
  height: 40px;
  overflow: hidden;
  position: relative;
  width : 40px;

  img {
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
  }
`;
