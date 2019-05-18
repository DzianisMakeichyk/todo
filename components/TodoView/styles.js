import styled from 'styled-components';

import { styles } from '../../util/constant/styles';

export const TodoViewStyles = styled.div`
  background-color: ${styles.colors.bg};
  margin: 0 auto;
  width: 375px;
  position: relative;
`;

export const TodoViewWrapper = styled.div`
  padding: 16px ${styles.grid.gutterMobile} 129px;

  ul {
    margin: 0 0 28px;
  }
`;

export const TodoViewContainer = styled.main`
  min-height: calc(100vh - 108px);
`;

export const Title = styled.p`
  color: ${styles.colors.lavenderPurple};
  font-family: ${styles.fonts.secondary};
  font-size: 13px;
  line-height: 16px;
  padding: 0 0 16px;
`;
