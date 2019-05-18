import styled from 'styled-components';

export const VisuallyHiddenStyling = styled.span`
  position: absolute;
  overflow: hidden;
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  clip: rect(0 0 0 0);
`;
