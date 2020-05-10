import React from 'react';
import styled from '@emotion/styled';

import { Home, Soap, Cough, Hand, Tissue, Mask } from 'Components/Icons';
import { P } from 'Components/HTML';

const ListContainer = styled.ul`
  list-style-type: none;
  padding-inline-start: 0;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin: 0 .75rem 1.75rem 0;
`;

const IconContainer = styled.div`
  min-width: 5.41rem;
  max-width: 5.41rem;
  text-align: left;
`;

const RecommendationList = () => (
    <ListContainer>
      <ListItem>
        <IconContainer><Home/></IconContainer>
        <P>
          <strong>Restez chez vous</strong>, évitez tout contact avec les autres. Certaines personnes transmettent le virus sans en ressentir les symptômes.
        </P>
      </ListItem>
      <ListItem>
        <IconContainer><Soap/></IconContainer>
        <P>
          Lavez-vous <strong>très régulièrement</strong> les mains
        </P>
      </ListItem>
      <ListItem>
        <IconContainer><Cough/></IconContainer>
        <P>
          Toussez ou éternuez <strong>dans votre coude ou dans un mouchoir</strong>
        </P>
      </ListItem>
      <ListItem>
        <IconContainer><Hand/></IconContainer>
        <P>
          Saluez <strong>sans serrer la main, n'embrassez personne</strong>
        </P>
      </ListItem>
      <ListItem>
        <IconContainer><Tissue/></IconContainer>
        <P>
          Utilisez <strong>un mouchoir à usage unique</strong> et jetez-le
        </P>
      </ListItem>
      <ListItem>
        <IconContainer><Mask/></IconContainer>
        <P>
          <strong>Portez un masque</strong> en présence d'autres personnes.
        </P>
      </ListItem>
    </ListContainer>
);

export default RecommendationList;