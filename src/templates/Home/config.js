// import hero from 'src/components/Hero/config';
// import metaTags from 'src/components/MetaTags/config';

export default {
  label: 'Home',
  name: 'home',
  file: 'netlify/pages/home.yaml',
  fields: [
    { label: "Title", name: "title", widget: "string" },
    { label: "Publish Date", name: "date", widget: "datetime" },
    { label: "Description", name: "description", widget: "string" },
    { label: "Body", name: "body", widget: "markdown" }
  ],
};
