import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({title, description, lang = 'fr'}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title || site.siteMetadata.title}
      titleTemplate={title && `%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: 'description',
          content: metaDescription
        }
      ]}
    />
  );
}

export default SEO;
