import React from 'react';
import styled from '@emotion/styled';

import Card from 'Components/Card';

const StyledContainer = styled.ul`
  display: grid;
  gap: 2rem;
  padding: 2rem 0;
  list-style-type: none;

  @media (min-width: 30rem) {
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  }
`;

const CategoryCards = ({resources}) => {
  return (
    <StyledContainer>
      {resources.allResourcesYaml.nodes.map(resource => (
        <Card data={{
          heading: resource.pathology,
          title: resource.name,
          subtitle: resource.description,
          link: resource.link
        }} key={resource.id} />
        ))}
    </StyledContainer>
  );
}

export default CategoryCards;
