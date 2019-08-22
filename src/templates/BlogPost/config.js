// import info from 'src/components/Info/config';
// import metaTags from 'src/components/MetaTags/config';

// collections:
//   - name: "blog" # Used in routes, e.g., /admin/collections/blog
//     label: "Post" # Used in the UI
//     folder: "content/collections/posts" # The path to the folder where the documents are stored
//     create: true # Allow users to create new documents in this collection
//     slug: "{{year}}-{{month}}-{{day}}-{{slug}}" # Filename template, e.g., YYYY-MM-DD-title.md
//     fields: # The fields for each document, usually in front matter.
//     # Remove any that aren't needed for posts
//       - {label: "Layout", name: "layout", widget: "hidden", default: "blog"}
//       - {label: "Title", name: "title", widget: "string"}
//       - {label: "Publish Date", name: "date", widget: "datetime"}
//       - {label: "Featured Image", name: "thumbnail", widget: "image"}
//       # - {label: "Rating (scale of 1-5)", name: "rating", widget: "number"}
//       - {label: "Body", name: "body", widget: "markdown"}

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
