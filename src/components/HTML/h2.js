import styled from '@emotion/styled';

import { colors } from 'Style/colors';

const H2 = styled.h2`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 1.75rem;
  line-height: 1.21428;
  font-weight: 500;
  color: ${colors.accent};
  text-align: center;

  p + & {
    margin-top: 1.5rem;
  }
`;

export default H2;
