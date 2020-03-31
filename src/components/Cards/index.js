import styled from '@emotion/styled';
import React from 'react';
import Card from '../Card';

const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
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
      image: "https://as2.ftcdn.net/jpg/00/84/76/33/500_F_84763354_l03Lg7bgSyWhFnP10oBhxN2wGW24n4hP.jpg",
      title: "sample title " + indexCard,
      text: "sample text " + indexCard,
      link: "https://maladiecoronavirus.fr/",
      author: "By Meetic"
    };

    jsxCards.push(
      <Card data={cardItem} key={indexCard} />
    )
  };

  return <Container>{jsxCards}</Container>;
}

export default Cards;