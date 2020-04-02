import React from 'react';
import styled from '@emotion/styled';

import TargetCard from 'Components/TargetCard';

const CardsContainer = styled.ul`
  display: grid;
  gap: 2rem;
  padding: 0 0 2rem;
  padding-inline-start: 0;
  list-style-type: none;

  @media (min-width: 30rem) {
    grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
    padding: 2rem 0;
  }
`;

const TargetCards = () => {
  return (
      <CardsContainer>
        <TargetCard title="Un particulier" link="#patient"/>
        <TargetCard title="Un praticien" link="#praticien"/>
        <TargetCard title="Un établissement" link="#etablissement"/>
      </CardsContainer>
  );
}

export default TargetCards;