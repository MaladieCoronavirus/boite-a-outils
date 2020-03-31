import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

import { colors } from 'Style/colors';

const FooterContainer = styled.footer`
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: space-between;
  align-self: end;
  background: ${colors.bgHighlight};
  min-height: 6rem;
  padding: 1.5rem 1.5rem;
  grid-column-gap: 4rem;
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
  margin-top: 2.3rem;
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

const Footer = () => (
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
              <a href="https://www.gouvernement.fr/info-coronavirus" target="_blank">
                gouvernement.fr/info-coronavirus
              </a>
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
              <Link to="/mentions-legales">
                Mentions légales
              </Link>
            </LinkContainer>
          </li>
          <li>
            <LinkContainer>
              <Link to="/partenaires">
                Partenaires
              </Link>
            </LinkContainer>
          </li>
          <li>
            <LinkContainer>
              <Link to="/presse">
                Presse
              </Link>
            </LinkContainer>
          </li>
        </List>
      </section>
      <section>
        <TextContainer>
         Algorithme d'orientation mis à jour sur les recommandations en vigueur au 22/03/2020 à 16h15.
          Ce site d’information n’est pas un dispositif médical, il ne délivre pas d’avis médical.
          Projet solidaire d'urgence, financé par <LinkContainer secondary><Link to="/partenaires">l’Alliance Digitale contre le COVID-19 </Link> </LinkContainer>
           : <LinkContainer secondary><a href="https://twitter.com/maladiecovid19" target="_blank">@maladiecovid19</a></LinkContainer>
        </TextContainer>
      </section>
    </FooterContainer>
);

export default Footer;
