import styled from 'styled-components';

import { styles } from '../../util/constant/styles';

export const NoTasksWrapper = styled.div`
  left: 50%;
  position: absolute;
  text-align: center;
  top: 50%;
  transform: translate(-50%, -50%);

  svg {
    padding: 0 0 60px;
    width: 140px;
  }
`;

export const NoTasksHeader = styled.div`
  color: ${styles.colors.butterflyBush};
  font-family: ${styles.fonts.primary};
  font-size: 22px;
  line-height: 30px;
  padding: 0 0 9px;
`;

export const NoTasksDescription = styled.div`
  color: ${styles.colors.baliHai};
  font-family: ${styles.fonts.primary};
  font-size: 17px;
  line-height: 24px;
`;
