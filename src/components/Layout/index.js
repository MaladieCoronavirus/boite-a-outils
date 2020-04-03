import React from 'react';
import { Global } from "@emotion/core";
import styled from '@emotion/styled';
import { MDXProvider } from '@mdx-js/react';

import { globalStyles } from 'Style/global';
import { colors } from 'Style/colors';

import SEO from 'Components/SEO';
import Header from 'Components/Header';
import Footer from 'Components/Footer';
import { H1, H2, H3, P } from 'Components/HTML';

// create components, here or somewhere else, with emotion styled
const Container = styled.div`
  display: grid;
  grid-template-rows: min-content auto min-content;
  min-height: 100vh;
`;

export const Main = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  column-gap: 0.5rem;

  @media (min-width: 30rem) {
    grid-template-columns: auto repeat(12, minmax(auto, 5.41rem)) auto;
    column-gap: 1.875rem;
  }

  > section:nth-of-type(odd) {
    background-color: ${colors.bg};
  }
`;

export const Content = styled.section`
  grid-column: 2 / -2;
  padding: 2rem 0;
`;

export const FullWidthContent = styled.section`
  grid-column: 1 / -1;
`;

export const FullWidthContainer = styled.section`
  grid-column: 1 / -1;
  padding: 2rem 2.875rem;
`;

// pageContext is injected by the mdx plugin
const BaseLayout = ({children, pageContext}) => {
  const { title, description } = pageContext.frontmatter;

  return (
    <MDXProvider components={{
      h1: H1,
      h2: H2,
      h3: H3,
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
