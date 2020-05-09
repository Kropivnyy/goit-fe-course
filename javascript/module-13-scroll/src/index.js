import './styles.css';
import '../node_modules/basiclightbox/dist/basicLightbox.min.css';
import refs from './js/refs';
import lightbox from './js/lightbox';
import apiService from './js/api-service';
import fetchHandling from './js/fetch-handling';
import masonryService from './js/masonry-service';
import { infScroll } from './js/infinite-scroll';

infScroll.on('load', res => {
  const data = fetchHandling(res);
  apiService.result = data;
});

refs.form.addEventListener('submit', event => {
  event.preventDefault();
  refs.grid.innerHTML =
    '<div class="grid__col-sizer"></div><div class="grid__gutter-sizer"></div>';
  masonryService.resetMasonry();
  masonryService.initMasonry();
  apiService.query = refs.input.value.toLowerCase();
  apiService.resetResult();
  refs.form.reset();
  infScroll.options.resetPage();
  infScroll.loadNextPage();
});

refs.grid.addEventListener('click', event => {
  event.preventDefault();
  lightbox.showModal(event);
});
document.addEventListener('keyup', event => {
  event.preventDefault();
  lightbox.closeModal(event);
});
document.addEventListener('keyup', event => {
  event.preventDefault();
  lightbox.showNextImage(event);
});
document.addEventListener('keyup', event => {
  event.preventDefault();
  lightbox.showPrevImage(event);
});
