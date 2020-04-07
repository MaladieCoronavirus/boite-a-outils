import React from 'react';

import Layout, { Content, FullWidthContent, Main } from 'Components/Layout';
import TargetCards from 'Components/TargetCards';
import CategoryTitle from 'Components/CategoryTitle';
import CategoryLinks from 'Components/CategoryLinks';
import CategoryCards from 'Components/CategoryCards';

const ResourcePageLayout = ({
  layoutContext,
  contentId,
  target,
  links,
  resources
}) => {
  return (
    <Layout pageContext={layoutContext}>
      <FullWidthContent>
        <Main>
          <Content>
            <TargetCards/>
          </Content>
        </Main>
      </FullWidthContent>
      <Content id={contentId}>
        <CategoryTitle target={target} />
        <CategoryLinks links={links} />
        <CategoryCards resources={resources} />
      </Content>
    </Layout>
  );
}

export default ResourcePageLayout;
