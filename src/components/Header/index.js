import React from 'react';
import styled from '@emotion/styled';
import { useStaticQuery, graphql, Link } from 'gatsby';

import { colors } from 'Style/colors';
import logo from 'Images/logo.png';

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
`;

const Header = () => {
  const { site } = useStaticQuery(
      graphql`
        query {
          site {
            siteMetadata {
              title
            }
          }
        }
      `
  );

  return (
      <HeaderContainer>
        <LogoContainer>
          <Link to="/">
            <img src={logo} alt={site.siteMetadata.title} />
          </Link>
        </LogoContainer>
      </HeaderContainer>
  );
};

export default Header;
