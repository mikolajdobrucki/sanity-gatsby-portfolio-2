export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62c2f2887a23047e806e3662',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-2-studio-u54u2fok',
                  apiId: '9c040382-a859-44dd-8877-53bebfbe4601'
                },
                {
                  buildHookId: '62c2f28891bd0506c3577ee9',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-2-web-gpgihzzs',
                  apiId: '3d75dd78-de77-4355-b94f-7378c2038f8a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mikolajdobrucki/sanity-gatsby-portfolio-2',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-2-web-gpgihzzs.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
