import React from 'react';

// import { About } from 'src/templates/About';
// import { Form } from 'src/templates/Form';
import { Home } from '../Home';
import BlogPost from '../BlogPost';
import { convertMarkdownToHTML } from '../../utils/markdown';

import { config } from './config';

const templates = {
  // about: About,
  home: Home,

  // lists: List,
  // author: List,
  // landings: Landing,

  // subpage: Subpage,
  // blogPost: BlogPost,
};


if (typeof window === 'undefined') {
  console.log('undefined window');
  // return;
}

import(`netlify-cms-app`).then(({ default: CMS }) => {
  Object.keys(templates).forEach(collectionName => {

    const Template = templates[collectionName];
    console.log('collectionName', collectionName);
    console.log(CMS);
    if (Template) {
      console.log('if template');
      CMS.registerPreviewTemplate(collectionName, ({ entry }) => {
        console.log(entry);
        const props = entry.getIn(['data']).toJS();
        console.log(props);
        return <Template {...convertMarkdownToHTML(props, { includeToc: props.includeToc })} />;
      });
    }
  });

  CMS.init({ config });
});

import(`netlify-identity-widget`).then(({ default: netlifyIdentityWidget }) => {
  netlifyIdentityWidget.on(`init`, user => {
    if (!user) {
      netlifyIdentityWidget.open('login'); // open the modal to the login tab

      netlifyIdentityWidget.on(`login`, () => {
        document.location.href = '/admin/';
      });
    }
  });

  netlifyIdentityWidget.init();
});

export default () => {
  React.useEffect(() => {

  }, []);

  return <div />;
};
