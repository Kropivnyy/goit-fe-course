import { infScroll } from './infinite-scroll';
import imagesLoaded from 'imagesloaded';
import getItemHTML from './get-item-html';
import InfiniteScroll from 'infinite-scroll';
import masonryService from './masonry-service';

InfiniteScroll.imagesLoaded = imagesLoaded;
const proxyElem = document.createElement('div');

export default function fetchHandling(response) {
  const { results } = JSON.parse(response);
  const itemsHTML = results.map(getItemHTML).join('');
  proxyElem.innerHTML = itemsHTML;
  const items = proxyElem.querySelectorAll('.photo-item');
  imagesLoaded(items, function () {
    infScroll.appendItems(items);
    masonryService.msnry.appended(items);
  });
  return results;
}
