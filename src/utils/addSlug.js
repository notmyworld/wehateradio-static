// FIXME not working and maybe not needed
export default (data) => {
  Promise.resolve(data).then((dataCallback) => {
    dataCallback.forEach((item) => {
      item.slug = item.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
    });
  });
}
