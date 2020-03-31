import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

import { colors } from 'Style/colors';

const FooterContainer = styled.footer`
  width: 100%;
  align-self: end;
  background: ${colors.bgMuted};
  min-height: 6rem;
  padding: 1.45rem 1.0875rem;
`;

const List = styled.ul`
  padding-inline-start: 0;
  list-style: none;
`;

const ListItem = styled.li`
  a {
    text-decoration: none;
    color: ${colors.text};
    font-size: .9rem;

    &:hover {
      color: ${colors.text};
    }
  }
`;

const Footer = () => (
    <FooterContainer>
      <List>
        <ListItem>
          <Link to="/mentions-legales">
            Mentions légales
          </Link>
        </ListItem>
      </List>
    </FooterContainer>
);

export default Footer;
