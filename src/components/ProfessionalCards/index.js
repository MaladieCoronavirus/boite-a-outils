import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import CategoryCards from 'Components/CategoryCards';

const ProfessionalCards = () => {
  const resources = useStaticQuery(graphql`
    query ProfessionalResources {
      allResourcesYaml(filter: {target: {eq: "praticiens"}}) {
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

export default ProfessionalCards;
