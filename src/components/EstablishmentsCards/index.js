import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import CategoryCards from 'Components/CategoryCards';

const EstablishmentsCards = () => {
  const resources = useStaticQuery(graphql`
    query EstablishmentsResources {
      allResourcesYaml(filter: {target: {eq: "establishment"}}) {
        nodes {
          id
          link
          description
          author
          name
          pathology
        }
      }
    }
  `);

  return (
    <CategoryCards resources={resources} />
  );
}

export default EstablishmentsCards;
