import React from 'react';
import { Global } from "@emotion/core";
import styled from '@emotion/styled';
import { MDXProvider } from '@mdx-js/react';

import { globalStyles } from 'Style/global';

import SEO from 'Components/SEO';
import Header from 'Components/Header';
import Footer from 'Components/Footer';
import { H1, H2, P } from 'Components/HTML';

// create components, here or somewhere else, with emotion styled
const Container = styled.div`
  display: grid;
  grid-template-rows: min-content auto min-content;
  min-height: 100vh;
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: auto repeat(12, minmax(auto, 5.41rem)) auto;
  column-gap: 1.875rem;
  padding: 2rem 0;
`;

export const Content = styled.div`
  grid-column: 2 / -2;
`;

// pageContext is injected by the mdx plugin
const BaseLayout = ({children, pageContext}) => {
  const { title, description } = pageContext.frontmatter;

  return (
    <MDXProvider components={{
      h1: H1,
      h2: H2,
      p: P
    }}>
      <Global styles={globalStyles} />
      <SEO title={title} description={description} />
      <Container>
        <Header/>
        <Main>
          {children}
        </Main>
        <Footer/>
      </Container>
    </MDXProvider>
  );
}

const Layout = ({children, pageContext}) => {
  const { layout } = pageContext.frontmatter;

  if (layout === 'article') {
    return (
      <BaseLayout pageContext={pageContext}>
        <Content>
          {children}
        </Content>
      </BaseLayout>
    );
  }

  return (
    <BaseLayout pageContext={pageContext}>
      {children}
    </BaseLayout>
  );
}

export default Layout;
