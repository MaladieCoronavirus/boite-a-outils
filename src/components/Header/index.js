import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

import { colors } from 'Style/colors';
  import { Logo } from 'Components/Icons';

const HeaderContainer = styled.header`
  display: grid;
  width: 100%;
  height: 3.75rem;
  background: ${colors.bgPrimary};
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.21);
  align-items: center;
`;

const LogoContainer = styled.div`
  display: inline-block;
  margin-left: 1rem;
  height: 2.5rem;
  
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${colors.textHighlight};
  }
  
  @media (min-width: 30rem) {
    margin-left: 4.75rem;
  }
`;

const LogoText = styled.span`
    margin-left: 1rem;
    font-size: 1rem;
    font-weight: 300;
    letter-spacing: 0.0625rem;
    
    strong {
      font-weight: 500;
    }
`;

const Header = () => (
    <HeaderContainer>
      <LogoContainer>
        <Link to="/">
          <Logo/>
          <LogoText>
            OUTILS<strong>CORONAVIRUS</strong>.FR
          </LogoText>
        </Link>
      </LogoContainer>
    </HeaderContainer>
);

export default Header;
