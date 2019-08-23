import SettingsConfig from '../../components/Settings/config';

// import AboutConfig from 'src/templates/About/config';

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
  site_domain: 'cms.netlify.com',
  collections: [
    SettingsConfig,
    BlogPostConfig,
    {
      label: 'Home',
      name: 'home',
      file: 'netlify/pages/home.yaml',
      fields: [
        { label: "Title", name: "title", widget: "string" },
        { label: "Publish Date", name: "date", widget: "datetime" },
        { label: "Description", name: "description", widget: "string" },
        { label: "Body", name: "body", widget: "markdown" }
      ],
    }
    // FormConfig,
  ],
};


// {
//   label: 'Pages',
//   label_singular: 'Page',
//   name: 'pages',
//   delete: false,
//   files: [HomeConfig],
// },
