import styled from '@emotion/styled';

const P = styled.p`
  font-size: 1.125rem;
  line-height: 1.3125rem;
  text-align: left;
  
  strong {
    font-weight: 600;
  }
  
  & + & {
    margin-top: 1rem;
  }
`

export default P;
