import * as basicLightbox from 'basiclightbox';
import apiService from './api-service';

export default {
  lightboxRef: null,
  instance: basicLightbox.create(
    `<img class="lightbox__image" src="" alt="" />`,
  ),

  showModal(event) {
    this.instance.show();
    this.lightboxRef = document.querySelector('.lightbox__image');
    this.lightboxRef.src = event.target.dataset.source;
  },

  closeModal(event) {
    if (event.key === 'Escape') {
      this.instance.close();
    }
  },
  findImageIndex() {
    return apiService.foundImages.findIndex(
      image => image.urls.regular === this.lightboxRef.src,
    );
  },
  changeImage(imageIndex) {
    const elem = apiService.foundImages.find((item, index) => {
      if (imageIndex === index) return item;
    });
    this.lightboxRef.src = elem.urls.regular;
  },
  showNextImage(event) {
    if (event.key === 'ArrowRight') {
      let currentImageIndex = this.findImageIndex();
      let nextImageIndex = currentImageIndex + 1;
      nextImageIndex >= apiService.foundImages.length
        ? (currentImageIndex = 0)
        : (currentImageIndex += 1);
      this.changeImage(currentImageIndex);
    }
  },
  showPrevImage(event) {
    if (event.key === 'ArrowLeft') {
      let currentImageIndex = this.findImageIndex();
      let prevImageIndex = currentImageIndex - 1;
      prevImageIndex < 0
        ? (currentImageIndex = apiService.foundImages.length - 1)
        : (currentImageIndex -= 1);
      this.changeImage(currentImageIndex);
    }
  },
};
