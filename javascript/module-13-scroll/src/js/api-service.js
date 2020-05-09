export default {
  searchQuery: '',
  foundImages: [],
  resetResult() {
    this.foundImages = [];
  },
  get query() {
    return this.searchQuery;
  },
  set query(value) {
    return (this.searchQuery = value);
  },
  get result() {
    return this.foundImages;
  },
  set result(items) {
    this.foundImages = [...this.foundImages, ...items];
  },
};
