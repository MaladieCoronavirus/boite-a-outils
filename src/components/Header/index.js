import React from 'react';
import styled from '@emotion/styled';
import { useStaticQuery, graphql, Link } from 'gatsby';

import { colors } from 'Style/colors';

const HeaderContainer = styled.header`
  width: 100%;
  background: white;
  padding: 1.45rem 1.0875rem;
  margin-bottom: 1.45rem;
  box-shadow: 0 2px 2px -2px #ccc;
`;

const LogoContainer = styled.div`
  a {
    text-decoration: none;
    font-size: 1.7rem;
    font-weight: 600;
    color: ${colors.primary};

    &:hover {
      color: ${colors.primary};
    }
  }
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
            {site.siteMetadata.title}
          </Link>
        </LogoContainer>
      </HeaderContainer>
  );
}

export default Header;
