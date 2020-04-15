import React from 'react';
import { graphql } from 'gatsby';

import ResourcePageLayout from 'Components/ResourcePageLayout';
import { subtitle } from 'Components/CategoryTitle';

const PathologyPage = ({data, pageContext}) => {
  const { pathology, cleanPathology, target, pathologyList } = pageContext;
  const layoutContext = {
    frontmatter: {
      title: `${pathology} | ${subtitle[target]}`
    }
  }

  return (
    <ResourcePageLayout
      layoutContext={layoutContext}
      contentId={`${target}-${cleanPathology}`}
      target={target}
      links={pathologyList}
      resources={data}
    />
  );
}

export const query = graphql`
  query($pathology: String!, $target: String!,) {
    allResourcesYaml(filter: {targets: {eq: $target}, pathology: {eq: $pathology}}) {
      nodes {
        id
        description
        author
        link
        name
        pathology
      }
    }
  }
`

export default PathologyPage;
