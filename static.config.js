// resource: https://github.com/tb/react-static-netlifycms
import path from 'path'
// import axios from 'axios'
// import jdown from 'jdown'

import { getRoutes } from './src/utils/getRoutes';
import { getFile } from './src/utils/files';
import { NETLIFY_PATH, SITE_ROOT } from './src/utils/settings';

// TYPES
// posts,
// reviews,
// home,
// radio,
// links,
// admin


// let collections = {
//   posts: [...posts],
//   reviews: [...reviews],
//   radioShows: [...radio],
// }
//
// // Adding the category to the collections of post type
// let collectionsTypes = Object.keys(collections);
// collectionsTypes.forEach((collectionsType) => {
//   collections[collectionsType].forEach((item) => {
//     item.category = collectionsType;
//   });
// });

export default {

  getSiteData: () => getFile(`${NETLIFY_PATH}/settings.yaml`),

  getRoutes,

  // getRoutes: async () => {
  //
  //   return [
  //     {
  //       path: '/blog',
  //       getData: () => ({
  //         posts,
  //       }),
  //       children: posts.map((post, index) => ({
  //         path: `/post/${ post.title}`,
  //         template: 'src/containers/Post',
  //         getData: () => ({
  //           post: { ...post },
  //         }),
  //       })),
  //     },
      // {
      //   path: '/',
      //   component: 'src/containers/Home',
      //   getData: () => ({
      //     ...home,
      //     collections,
      //   }),
      // }, {
      //   path: '/about',
      //   component: 'src/containers/About',
      //   getData: () => ({
      //     about,
      //   }),
      // }, {
      //   path: '/admin',
      //   component: 'src/containers/Admin',
      //   getData: () => ({
      //     admin,
      //   }),
      // }, {
      //   path: '/dutch-band-map',
      //   component: 'src/containers/Bands',
      // }, {
      //   path: '/blog',
      //   component: 'src/containers/Blog',
      //   getData: () => ({
      //     posts,
      //   }),
      //   children: posts.map((post, index) => ({
      //     path: `/${post.slug}`,
      //     component: 'src/containers/Post',
      //     getData: () => ({
      //       post,
      //       index
      //     }),
      //   })),
      // }, {
      //   path: '/radio-shows',
      //   component: 'src/containers/RadioIndex',
      //   getData: () => ({
      //     radio,
      //   }),
      //   children: radio.map((show, index) => ({
      //     path: `/${show.slug}`,
      //     component: 'src/containers/Radio',
      //     getData: () => ({
      //       show,
      //       index
      //     }),
      //   })),
      // }, {
      //   path: '/reviews',
      //   component: 'src/containers/Blog',
      //   getData: () => ({
      //     posts,
      //   }),
      //   children: posts.map((post, index) => ({
      //     path: `/review/${post.slug}`,
      //     component: 'src/containers/Post',
      //     getData: () => ({
      //       post,
      //       index
      //     }),
      //   })),
      // }, {
      //   path: '/calendar',
      //   component: 'src/containers/Calendar',
      //   getData: () => ({
      //     calendar,
      //   }),
      // }, {
      //   path: '/get-your-fix',
      //   component: 'src/containers/GetYourFix',
      //   getData: () => ({
      //     links,
      //   }),
      // },
  //   ]
  // },
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/templates'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
    [
      "react-static-plugin-sass",
      {
        sourceMap: true,
        // other options for the sass-loader
      }
    ],

  ],
}
