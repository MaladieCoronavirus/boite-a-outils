import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import CategoryCards from 'Components/CategoryCards';

const PatientCards = () => {
  const resources = useStaticQuery(graphql`
    query PatientResources {
      allResourcesYaml(filter: {target: {eq: "patient"}}) {
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

export default PatientCards;
