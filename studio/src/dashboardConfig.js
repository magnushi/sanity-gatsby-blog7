export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5f3f6e396acb21bda326a187',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-7-studio-vrg31cbq',
                  apiId: 'ed2418d0-baf4-445c-b688-a557a6888cf4'
                },
                {
                  buildHookId: '5f3f6e39ec569614560f7423',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-7-web',
                  apiId: 'd700f96d-1b94-496b-91bf-c622f418dec6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/magnushi/sanity-gatsby-blog7',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-7-web.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
