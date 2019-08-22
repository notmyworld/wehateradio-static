import React from 'react';

// import { About } from 'src/templates/About';
// import { Form } from 'src/templates/Form';
import Home from '../Home';
// import { Subpage } from 'src/templates/Subpage';
import { convertMarkdownToHTML } from '../../utils/markdown';

import { config } from './config';

const templates = {
  // about: About,
  home: Home,

  // lists: List,
  // author: List,
  // landings: Landing,

  // subpage: Subpage,
  // blogPost: Subpage,
};

export default () => {
  React.useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    import(`netlify-cms-app`).then(({ default: CMS }) => {

      Object.keys(templates).forEach(collectionName => {
        const Template = templates[collectionName];

        if (Template) {
          CMS.registerPreviewTemplate(collectionName, ({ entry }) => {
            const props = entry.getIn(['data']).toJS();

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
  }, []);

  return <div />;
};
