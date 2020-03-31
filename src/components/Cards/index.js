import styled from '@emotion/styled';
import React from 'react';
import Card from '../Card';
import danger from '../../resources/svg/danger.svg';

const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(27.4375rem, 1fr));
  grid-row-gap: 1.5rem;
  grid-column-gap: 1.5rem;
  align-items: start;
  justify-items: center;
  padding: 0;
  padding: 1rem;
  list-style: none;
`;


const Cards = () => {
  const jsxCards = [];

  for (let indexCard = 1; indexCard <= 100; indexCard++) {
    const cardItem = {
      image: {danger},
      heading: "Consultation",
      title: "Regional Cuisine Down Home Southern Cooking",
      subtitle: "Toffee sesame snaps cheesecake. Chocolate cake chocolte candy corona",
      link: "https://www.maladiecoronavirus.fr/"
    };

    jsxCards.push(
      <Card data={cardItem} key={indexCard} />
    )
  };

  return <Container>{jsxCards}</Container>;
}

export default Cards;