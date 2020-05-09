import InfiniteScroll from 'infinite-scroll';
import masonryService from './masonry-service';
import apiService from './api-service';

const baseURL = 'https://api.unsplash.com/search/photos';
const apiKey = 'x9AhgqdVedkj92knzoynGC04XskWUCMDGAsuL6NaIdM';

const infScroll = new InfiniteScroll('.grid', {
  path: function () {
    return `${baseURL}?client_id=${apiKey}&query=${apiService.searchQuery}&page=${this.pageIndex}&per_page=12&order_by=popular`;
  },
  responseType: 'text',
  outlayer: masonryService.msnry,
  status: '.page-load-status',
  history: false,
  resetPage() {
    infScroll.pageIndex = 1;
  },
});

export { infScroll };
