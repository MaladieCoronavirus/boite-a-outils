import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

import { colors } from 'Style/colors';

import { Link as RelativeLink } from 'gatsby';
import OutboundLink from 'Components/OutboundLink';

const linkStyle = css`
  color: ${colors.secondary};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const StyledRelativeLink = styled(RelativeLink)`${linkStyle}`;
const StyledOutboundLink = styled(OutboundLink)`${linkStyle}`;

const Link = ({href, ...props}) => {
  if (href.startsWith('/')) {
    return (
      <StyledRelativeLink to={href} {...props} />
    );
  }

  return (
    <StyledOutboundLink href={href} {...props} />
  );
}

export default Link;
