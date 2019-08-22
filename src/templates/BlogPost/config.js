// import info from 'src/components/Info/config';
// import metaTags from 'src/components/MetaTags/config';

export const BlogPostConfig = {
  label: 'Blog Posts',
  label_singular: 'Blog Post',
  name: 'blogPost',
  folder: 'netlify/posts',
  create: true,
  delete: true,
  slug: '{{slug}}',
  extension: 'md',
  format: 'yaml-frontmatter',
  fields: [
    {
      label: 'URL path',
      name: 'path',
      widget: 'string',
    },
    {
      label: 'Tags',
      name: 'tags',
      widget: 'list',
      required: false,
      field: { label: 'tag', name: 'tag', widget: 'string', required: false },
    },
    {
      label: 'Related Tags',
      name: 'relatedTags',
      widget: 'list',
      required: false,
      field: { label: 'tag', name: 'tag', widget: 'string', required: false },
    },
    {
      label: 'Publish Date',
      name: 'publishedDate',
      widget: 'date',
      dateFormat: 'MMM DD, YYYY',
      required: false,
    },
    {
      label: 'Author',
      name: 'author',
      widget: 'relation',
      collection: 'authors',
      searchFields: ['name'],
      valueField: 'name',
      required: false,
    },
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
      required: false,
    },
    {
      label: 'SubTitle',
      name: 'subtitle',
      widget: 'string',
      required: false,
    },
    {
      label: 'Short Description',
      hint: 'A short description of this page that will only be displayed on list item cards and "Related Articles"',
      name: 'listSubtitle',
      widget: 'string',
      required: false,
    },
    {
      label: 'Image',
      name: 'image',
      widget: 'file',
      required: false,
    },
    {
      name: 'tabs',
      widget: 'list',
      required: false,
      fields: [
        {
          name: 'title',
          widget: 'string',
          required: false,
        },
        {
          name: 'href',
          widget: 'string',
          required: false,
        },
      ],
    },
    {
      label: 'Include table of contents? (default: true)',
      name: 'includeToc',
      widget: 'boolean',
      required: false,
      default: true,
    },
    {
      label: 'Content',
      name: 'body',
      widget: 'markdown',
      required: false,
    },
    // metaTags,
  ],
};
