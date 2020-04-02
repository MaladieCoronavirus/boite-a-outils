import styled from '@emotion/styled';
import React from 'react';
import { colors } from 'Style/colors';
import OutboundLink from 'Components/OutboundLink';

const StyledCard = styled.li`
  display: flex;
  flex-direction: column;
  position: relative;
  border: 1px solid ${colors.bg};
  border-radius: 0.25rem;
  box-shadow: 1px 3px 9px 0 rgba(0, 0, 0, 0.07);
  background-color: rgba(255, 255, 255, 0.6);
  padding: 1.1875rem 1.125rem 1.875rem 2rem;
  :focus-within, :hover {
    box-shadow: 0 0 0 0.05rem;
    color: #F5F5F5;
  }
  :focus-within a:focus {
    text-decoration: none;
  }
`;

const SVG = styled.img`
  width: 3.875rem;
  height: auto;
`;

const Heading = styled.span`
  ${({right}) => right && `
    position: absolute;
    right: 1.125rem;
  `}
  text-transform: uppercase;
  line-height: 0.9375rem;
  color: ${colors.accent};
  font-size: 0.75rem;
  font-weight: bold;
`;

const TextContainer = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1.5rem;
  text-align: center;
  letter-spacing: 0;
  > * {
    margin-bottom: 0.325rem;
    width: 100%;
  }
`;

const Title = styled.h2`
  margin-bottom: 0.6875rem;
  line-height: 1.5625rem;
  color: ${colors.bgPrimary};
  font-size: 1.3125rem;
  font-weight: bold;
  text-align: left;
`;

const SubTitle = styled.p`
  margin-bottom: 1.4375rem;
  line-height: 1.25rem;
  color: ${colors.text};
  font-size: 1rem;
  text-align: left;
`;

const Link = styled(OutboundLink)`
  margin-top: auto;
  margin-bottom: 1.5rem;
  text-decoration: none;
  line-height: 1rem;
  letter-spacing: 0;
  color: ${colors.accent};
  font-size: 0.75rem;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  :focus {
    outline: none;
    text-decoration: underline;
  }
`;

const CTA = styled(OutboundLink)`
  align-items: center;
  justify-content: center;
  border-radius: 0.125rem;
  background-color: ${colors.primary};
  cursor: pointer;
  width: 8.25rem;
  height: 2.375rem;
  line-height: 1.125rem;
  color: #FFFFFF;
  font-size: 0.875rem;
  font-weight: 500;
  display: inline-flex;
  text-decoration: none;
`;

const Card = ({ data: { link, image, heading, title, subtitle }}) =>
  <StyledCard>
    {image && <SVG src={image.question} alt={title} />}
    <Heading right={!!image}>{heading}</Heading>
    <TextContainer>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
      <Link href={link} title={title}>{link}</Link>
      <CTA href={link} title={title}>En savoir plus</CTA>
    </TextContainer>
  </StyledCard>

export default Card;
