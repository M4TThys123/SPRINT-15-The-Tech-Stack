import * as prismic from '@prismicio/client'

export const repositoryName = 'cmd-minor'

export const client = prismic.createClient(repositoryName, {
  routes: [
    {
      type: 'docs',
      path: '/',
    },
    // {
    //     type: 'homepage',
    //     path: '/hoi'
    // }
  ],
})