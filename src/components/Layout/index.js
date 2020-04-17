import React from 'react';
import { Global } from "@emotion/core";
import styled from '@emotion/styled';
import { MDXProvider } from '@mdx-js/react';

import { globalStyles } from 'Style/global';
import { colors } from 'Style/colors';

import SEO from 'Components/SEO';
import Header from 'Components/Header';
import Footer from 'Components/Footer';
import { H1, H2, H3, P, Link } from 'Components/HTML';

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

`;

export const Content = styled.section`
  grid-column: 2 / -2;
  padding: 2rem 0;
  text-align: center;
`;

export const FullWidthContent = styled.section`
  grid-column: 1 / -1;
  &:nth-of-type(odd) {
    background-color: ${colors.bg};
  }
`;

export const InformationBlocContainer = styled.div`
  display: grid;
  column-gap: 0.5rem;
  grid-template-columns: auto;
  text-align: center;
  align-items: center;
  
  h1, h2 {
    text-align: left;
  }
  
  > div {
    padding: 0 .75rem;
  }
  
  > div:nth-of-type(2) {
    margin: 2rem 0;
  }
  
   @media (min-width: 50rem) {
    grid-template-columns: 1fr 5fr 5fr 1fr;
    column-gap: 1.875rem;
    padding: 2rem 0;
    
    > div:nth-of-type(2) {
       margin: 0;
     }
  }
`;

// pageContext is injected by the mdx plugin
const BaseLayout = ({children, pageContext}) => {
  const { title, description } = pageContext.frontmatter;

  return (
    <MDXProvider components={{
      h1: H1,
      h2: H2,
      h3: H3,
      p: P,
      a: Link
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
