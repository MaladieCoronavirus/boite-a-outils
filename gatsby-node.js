const path = require(`path`);
const slugify = require('slugify');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const targets = await graphql(`
    query {
      allResourcesYaml {
        distinct(field: targets)
      }
    }
  `);

  for (target of targets.data.allResourcesYaml.distinct) {
    const pathologies = await graphql(`
      query {
        allResourcesYaml(filter: {targets: {eq: "${target}"}}) {
          distinct(field: pathology)
        }
      }
    `);

    const pathologyPageList = pathologies.data.allResourcesYaml.distinct.map(pathology => {
      const cleanPathology = slugify(pathology, {
        remove: /[*+~.()'"!:@]/g,
        lower: true
      });

      const url = `/${target}/${cleanPathology}/`;

      return {
        pathology,
        url,
        cleanPathology
      };
    });

    const pathologyList = [
      {
        pathology: 'Tout',
        url: `/${target}/`
      },
      ...pathologyPageList
    ]

    // create Target page
    createPage({
      path: `/${target}/`,
      component: path.resolve('./src/components/TargetPage/index.js'),
      context: {
        target,
        pathologyList
      }
    });

    // create all pathologies pages
    pathologyPageList.forEach(pathology => {
      createPage({
        path: pathology.url,
        component: path.resolve('./src/components/PathologyPage/index.js'),
        context: {
          pathology: pathology.pathology,
          target,
          cleanPathology: pathology.cleanPathology,
          pathologyList
        }
      });
    });
  }
}
