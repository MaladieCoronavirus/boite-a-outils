import React from 'react';
import styled from '@emotion/styled';
import { Link, useStaticQuery, graphql } from 'gatsby';
import OutboundLink from 'Components/OutboundLink';

import { colors } from 'Style/colors';

const FooterContainer = styled.footer`
  display: grid;
  justify-content: space-between;
  align-self: end;
  background: ${colors.bgHighlight};
  min-height: 6rem;
  padding: 1.5rem 1.5rem;
  grid-column-gap: 4rem;
  grid-row-gap: 2rem;

  @media (min-width: 35rem) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 50rem) {
    grid-template-columns: auto auto auto;
  }
`;

const FooterHeadline = styled.h3`
  font-size: 1.1rem;
  font-weight: bold;
  color: ${colors.primary};
  margin-bottom: 1.2rem;
`;

const List = styled.ul`
  padding-inline-start: 0;
  list-style: none;
`;

const TextContainer = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
`;

const LinkContainer = styled.span`
  a {
    color: ${props => props.secondary ? colors.secondary : colors.text};
    text-decoration: none;
    font-size: 1rem;
    line-height: 1.5rem;

    &:hover {
      color: ${props => props.secondary ? colors.secondary : colors.text};
      text-decoration: underline;
    }
  }
`;

const NoticeContainer = styled.section`
  @media (min-width: 35rem) {
    grid-column: 1 / -1;
  }

  @media (min-width: 50rem) {
    grid-column: auto;
    margin-top: 2.3rem;
  }
`;

const Footer = () => {
  const {currentBuildDate: {currentDate: buildDate}} = useStaticQuery(graphql`
    query BuildDate {
      currentBuildDate {
        currentDate
      }
    }
  `);

  return (
      <FooterContainer>
        <section>
          <FooterHeadline>
            Contacts utiles
          </FooterHeadline>
          <List>
            <li>
              <LinkContainer>
                <a href="tel:0800130000">
                  0 800 130 000 - (appel gratuit)
                </a>
              </LinkContainer>
            </li>
            <li>
              <LinkContainer secondary>
                <OutboundLink href="https://www.gouvernement.fr/info-coronavirus" data-title="gouvernement.fr/info-coronavirus">
                  gouvernement.fr/info-coronavirus
                </OutboundLink>
              </LinkContainer>
            </li>
          </List>
        </section>
        <section>
          <FooterHeadline>
            Navigation
          </FooterHeadline>
          <List>
            <li>
              <LinkContainer>
                <Link to="/">
                  Accueil
                </Link>
              </LinkContainer>
            </li>
            <li>
              <LinkContainer>
                <OutboundLink href="https://maladiecoronavirus.fr/mentions-legales" data-title="Mentions légales">
                  Mentions légales
                </OutboundLink>
              </LinkContainer>
            </li>
            <li>
              <LinkContainer>
                <OutboundLink href="https://maladiecoronavirus.fr/partenaires" data-title="Partenaires">
                  Partenaires
                </OutboundLink>
              </LinkContainer>
            </li>
            <li>
              <LinkContainer>
                <OutboundLink href="https://maladiecoronavirus.fr/presse" data-title="Presse">
                  Presse
                </OutboundLink>
              </LinkContainer>
            </li>
          </List>
        </section>
        <NoticeContainer>
          <TextContainer>
            Base d’information mise à jour le {buildDate}. Vous pouvez accéder et contribuer à cette base
            d’information sur le projet Github <LinkContainer secondary>
            <OutboundLink href="https://github.com/MaladieCoronavirus/boite-a-outils/tree/develop/src/resources">MaladieCoronavirus/boite-a-outils</OutboundLink></LinkContainer>.
            Site réalisé avec le concours de <LinkContainer secondary><OutboundLink href="https://maladiecoronavirus.fr/partenaires" data-title="Partenaires">l’Alliance Digitale contre le COVID-19 </OutboundLink> </LinkContainer>
             : <LinkContainer secondary><OutboundLink href="https://twitter.com/maladiecovid19">@maladiecovid19</OutboundLink></LinkContainer>
          </TextContainer>
        </NoticeContainer>
      </FooterContainer>
  );
}

export default Footer;
