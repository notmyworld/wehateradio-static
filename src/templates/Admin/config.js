import SettingsConfig from '../../components/Settings/config';

// import AboutConfig from 'src/templates/About/config';
import HomeConfig from '../../templates/Home/config';

// import FormConfig from 'src/templates/Form/config';
import { BlogPostConfig } from '../BlogPost/config';

export const config = {
  backend: {
    name: 'git-gateway',
    branch: 'master',
    // squash_merges: true,
    // commit_messages: {
    //   create: 'Create {{collection}} “{{slug}}”',
    //   update: 'Update {{collection}} “{{slug}}”',
    //   delete: 'Delete {{collection}} “{{slug}}”',
    //   uploadMedia: 'Upload “{{path}}”',
    //   deleteMedia: 'Delete “{{path}}”',
    // },
  },
  media_folder: 'public/uploads',
  public_folder: '/uploads',
  // display_url: 'http://wehateradio.net',
  // site_domain: 'cms.netlify.com',
  collections: [
    SettingsConfig,
    {
      label: 'Pages',
      label_singular: 'Page',
      name: 'pages',
      delete: false,
      files: [HomeConfig],
    },
    BlogPostConfig
    // FormConfig,
  ],
};
