import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

import { colors } from 'Style/colors';

const CategoryLink = styled(Link)`
  color: ${colors.textLight};
  text-decoration: none;
  text-transform: uppercase;
  border: 1px solid ${colors.bgLight};
  border-radius: 2rem;
  background-color: ${colors.bgMuted};
  margin: 0.5rem 0.8125rem;
  padding: 0.625rem 1.625rem;
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 1.25;

  :hover {
    opacity: 0.8;
  }

  &.active {
    color: ${colors.secondary};
    border-color: ${colors.secondary};
  }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 1rem 0 0;
`;

const CategoryLinks = ({ links }) => {
  return (
    <Container>
      {links.map((link, index) => (
        <CategoryLink key={index} to={link.url} activeClassName='active'>{link.pathology}</CategoryLink>
      ))}
    </Container>
  );
}

export default CategoryLinks;
