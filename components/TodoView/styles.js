import styled from 'styled-components';

import { styles } from '../../util/constant/styles';

export const TodoViewStyles = styled.div`
  background-color: ${styles.colors.bg};
  border-left: 1px solid ${styles.colors.alto};
  border-right: 1px solid ${styles.colors.alto};
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  width: 375px;

  .showItem-enter {
    opacity: .01;
    width: 0;
  }

  .showItem-enter.showItem-enter-active {
    opacity: 1;
    width: 100%;
    transition:
     opacity .3s ease,
     width .3s ease;
  }

  .showItem-leave {
    opacity: 1;
    width: 100%;
  }

  .showItem-leave.showItem-leave-active {
    opacity: 0;
    width: 0;
    transition:
     opacity .3s ease,
     width .3s ease;
  }
`;

export const TodoViewWrapper = styled.div`
  padding: 16px ${styles.grid.gutterMobile} 129px;

  ul {
    margin: 0 0 28px;
  }
`;

export const TodoViewContainer = styled.main`
  position: relative;
  min-height: calc(100vh - 108px);
`;

export const Title = styled.p`
  color: ${styles.colors.lavenderPurple};
  font-family: ${styles.fonts.secondary};
  font-size: 13px;
  line-height: 16px;
  padding: 0 0 16px;
`;
