import React from 'react';
import { graphql } from 'gatsby';

import ResourcePageLayout from 'Components/ResourcePageLayout';
import { subtitle } from 'Components/CategoryTitle';

const TargetPage = ({data, pageContext}) => {
  const { target, pathologyList } = pageContext;
  const layoutContext = {
    frontmatter: {
      title: subtitle[target]
    }
  }

  return (
    <ResourcePageLayout
      layoutContext={layoutContext}
      contentId={target}
      target={target}
      links={pathologyList}
      resources={data}
    />
  );
}

export const query = graphql`
  query($target: String!,) {
    allResourcesYaml(filter: {target: {eq: $target}}) {
      nodes {
        id
        description
        author
        link
        name
        pathology
        target
      }
    }
  }
`

export default TargetPage;
