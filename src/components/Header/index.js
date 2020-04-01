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
  margin-left: 4.75rem;
  height: 2.5rem;
  
  a {
    text-decoration: none;
  }
`;

const Header = () => (
    <HeaderContainer>
      <LogoContainer>
        <Link to="/">
          <Logo/>
        </Link>
      </LogoContainer>
    </HeaderContainer>
);

export default Header;
