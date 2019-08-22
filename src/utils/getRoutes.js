import { makePageRoutes } from 'react-static/node';

import { formatDate } from './dates';
import { getFile, getFiles } from './files';
import { NETLIFY_PATH, DEFAULT_PAGINATION_PAGE_SIZE, IS_PRODUCTION, RELATED_PAGES_LIMIT } from './settings';
import get from 'lodash.get';

export async function getRoutes() {
  let [
    home,
    // about,

    // forms = [],
    // authors = [],
    blogPosts = [],
  ] = await Promise.all([
    getFile(`${NETLIFY_PATH}/pages/home.yaml`),
    // getFile(`${NETLIFY_PATH}/pages/about.yaml`),
    // getFiles(`${NETLIFY_PATH}/forms`),

    // getFiles(`${NETLIFY_PATH}/authors`),

    getFiles(`${NETLIFY_PATH}/posts`, ['.md'], { includeToc: true }),
    // getFiles(`${NETLIFY_PATH}/subpages`, ['.md'], { includeToc: true }),
  ]);

  // // add author to pages and remove pages without a path
  // const allPages = [...blogPosts].filter(page => {
  //   if (page.path) {
  //     const authorPage = authors.find(author => author.title === page.author);
  //
  //     if (authorPage) {
  //       page.author = {
  //         name: authorPage.title,
  //         path: authorPage.path,
  //         image: authorPage.image,
  //       };
  //     }
  //
  //     return page.path;
  //   }
  // });

  const routes = [
    {
      path: '/',
      template: 'src/templates/Home',
      getData: () => home,
    },
    // {
    //   path: '404',
    //   template: 'src/templates/404',
    // },
    // {
    //   path: about.path,
    //   template: 'src/templates/About',
    //   getData: () => about,
    // },

    // ...createListRoutes('src/templates/Lists', lists, allPages),
    // ...createListRoutes('src/templates/Lists', authors, allPages, authorProps),
    // ...createRoutes('src/templates/Subpage', blogPosts, allPages, blogPostProps),
    // ...createRoutes('src/templates/Subpage', caseStudies, allPages, caseStudyProps),
    // ...createRoutes('src/templates/Subpage', other, allPages),
    // ...createRoutes('src/templates/Form', forms, allPages),
    // ...createRoutes('src/templates/Landing', landings, allPages, null, true),
  ];

  // Don't include admin route in production
  if (!IS_PRODUCTION) {
    routes.push({
      path: '/admin',
      template: 'src/templates/Admin',
      getData: () => {
        return {
          header: null,
          footer: null,
        };
      },
    });
  }

  return routes;
}

function filterPages(allPages, filter) {
  const pages = []; // pages that pass the filter

  for (const page of allPages) {
    if (!filter(page)) {
      continue;
    }

    pages.push({
      title: page.title,
      color: page.color,
      subtitle: page.subtitle,
      listSubtitle: page.listSubtitle,
      image: page.image,
      listImage: page.listImage,
      href: page.path,
      tags: page.tags, // used to show which tag matches the search
      author: page.author,
      publishedDate: formatDate(page.publishedDate),
      backgroundSize: page.backgroundSize,
    });
  }

  pages.sort((a, b) => {
    return new Date(a.publishedDate).getTime() < new Date(b.publishedDate).getTime() ? 1 : -1;
  });

  return pages;
}

function getRelatedPages(page, allPages) {
  let relatedPages = [];

  if (page.relatedTags && page.relatedTags.length) {
    // Grab pages with the same tag
    relatedPages = filterPages(allPages, relatedPage => {
      if (!relatedPage.tags || relatedPage.path === page.path) {
        return false;
      }

      for (const tag of page.relatedTags) {
        if (relatedPage.tags && relatedPage.tags.includes(tag)) {
          return true;
        }
      }

      return false;
    }).slice(0, RELATED_PAGES_LIMIT);
  }

  return relatedPages;
}

function createRoutes(template, pages, allPages, propFactory, noindex) {
  const routes = [];

  if (pages.length) {
    for (const page of pages) {
      if (!page.path) {
        continue;
      }

      routes.push({
        path: page.path,
        template: page.hasSandbox ? 'src/templates/Spectral' : template,
        noindex: noindex ? noindex : get(page, 'meta.robots', '').includes('noindex'),
        getData: () => {
          return {
            ...page,
            ...(propFactory ? propFactory(page) : {}),
            publishedDate: formatDate(page.publishedDate),
            relatedPages: getRelatedPages(page, allPages),
          };
        },
      });
    }
  }

  return routes;
}

function createListRoutes(template, listPages, allPages, propFactory) {
  const routes = [];

  for (const list of listPages) {
    const items = filterPages(allPages, page => {
      return (page.tags && page.tags.includes(list.tag)) || (page.author && page.author.name === list.title);
    });

    // if pagination is enabled add page size
    let pageSize = items.length;
    if (list.pagination && list.pagination.enabled) {
      pageSize = list.pagination.perPage || DEFAULT_PAGINATION_PAGE_SIZE;
    }

    // Add route for List page
    routes.push({
      path: list.path,
      template,
      getData: () => ({
        ...list,
        ...(propFactory ? propFactory(list) : {}),
        items: items.slice(0, pageSize),
        meta: {
          ...list.meta,
          canonical: (list.meta && list.meta.canonical) || `${list.path}/`,
        },
        pagination: {
          ...list.pagination,
          path: list.path,
          currentPage: 1,
          totalPages: Math.ceil(items.length / pageSize),
        },
        relatedPages: getRelatedPages(list, allPages),
      }),
    });

    // Add routes for List pagination pages
    if (list.pagination && list.pagination.enabled && items.length > pageSize) {
      routes.push(
        ...makePageRoutes({
          items,
          pageSize,
          pageToken: 'page',
          route: {
            path: list.path,
            template,
          },
          decorate: (item, currentPage, totalPages) => ({
            noindex: currentPage === 1,
            getData: () => ({
              ...list,
              ...(propFactory ? propFactory(list) : {}),
              title: currentPage > 1 ? `${list.title} - Page ${currentPage}` : list.title,
              items: items.slice((currentPage - 1) * pageSize, (currentPage - 1) * pageSize + pageSize),
              meta: {
                ...list.meta,
                canonical:
                  (list.meta && list.meta.canonical) ||
                  `${list.path}/${currentPage === 1 ? '' : `page/${currentPage}/`}`,
              },
              pagination: {
                ...list.pagination,
                path: list.path,
                currentPage,
                totalPages,
              },
            }),
          }),
        })
      );
    }
  }

  return routes;
}

function authorProps(props) {
  return {
    hero: {
      aligned: 'left',
    },
  };
}

function caseStudyProps(props) {
  const sidebar = props.sidebar || {};
  sidebar.info = sidebar.info || {};
  sidebar.info.image = props.image;

  return {
    className: 'case-study',
    pageName: 'Case Study',
    sidebar,
    hero: {
      aligned: 'left',
    },
    includeToc: false,
    backgroundSize: 'contain',
  };
}

function blogPostProps(props) {
  return {
    breadCrumbs: [{ title: 'Home', path: '/' }, { title: 'Blog', path: '/blog' }, { title: props.title }],
    hero: {
      aligned: 'left',
      contentBgImage: props.image,
    },
    meta: {
      ...props.meta,
      jld: {
        breadCrumbs: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, item: { '@id': 'https://stoplight.io/', name: 'Home' } },
            { '@type': 'ListItem', position: 2, item: { '@id': 'https://stoplight.io/blog/', name: 'Blog' } },
            {
              '@type': 'ListItem',
              position: 3,
              item: {
                '@id': `https://stoplight.io/${props.path}`,
                name: props.title,
              },
            },
          ],
        }),
        article: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'NewsArticle',
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://stoplight.io/blog/${props.path}`,
          },
          headline: props.title,
          image: [props.image],
          datePublished: props.publishedDate,
          dateModified: props.modifiedDate,
          author: { '@type': 'Person', name: props.author ? props.author.name : null },
          publisher: {
            '@type': 'Organization',
            name: 'Stoplight',
            logo: {
              '@type': 'ImageObject',
              url:
                'https://d33wubrfki0l68.cloudfront.net/c2cb23ce44d9046f897d797e33ca21c52be6ebd1/63887/images/robot-dude.svg',
            },
          },
          description: props.subtitle,
        }),
      },
    },
  };
}
