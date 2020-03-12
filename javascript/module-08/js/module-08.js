import galleryItems from './gallery-items.js';

const gallery = document.querySelector('.js-gallery');
const lightbox = document.querySelector('.js-lightbox');
const lightboxImage = document.querySelector('.lightbox__image');
const closeButton = document.querySelector('.lightbox__button');

const arrayOfGallery = [];
galleryItems.forEach(item => {
  const li = document.createElement('li');
  li.classList.add('gallery__item');
  const a = document.createElement('a');
  a.classList.add('gallery__link');
  a.href = item.original;
  const img = document.createElement('img');
  img.classList.add('gallery__image');
  img.src = item.preview;
  img.setAttribute('data-source', item.original);
  img.alt = item.description;
  a.appendChild(img);
  li.appendChild(a);
  arrayOfGallery.push(li);
});
gallery.append(...arrayOfGallery);

const openModal = ({ target }) => {
  event.preventDefault();
  lightbox.classList.add('is-open');
  lightboxImage.src = target.dataset.source;
};
const closeModal = () => {
  event.preventDefault();
  if (
    event.key === 'Escape' ||
    event.target === closeButton ||
    event.target.parentNode.className === 'lightbox js-lightbox is-open'
  ) {
    lightbox.classList.remove('is-open');
    lightboxImage.setAttribute('src', '');
  }
};
const findImageIndex = () =>
  galleryItems.findIndex(
    galleryItem => galleryItem.original === lightboxImage.src,
  );
const showNextImage = () => {
  event.preventDefault();
  if (event.key === 'ArrowRight') {
    let currentImageIndex = findImageIndex();
    let nextImageIndex = currentImageIndex + 1;
    nextImageIndex >= galleryItems.length
      ? (currentImageIndex = 0)
      : (currentImageIndex += 1);
    const nextImage = galleryItems.find((item, index) => {
      if (currentImageIndex === index) return item;
    });
    lightboxImage.src = nextImage.original;
  }
};
const showPrevImage = () => {
  event.preventDefault();
  if (event.key === 'ArrowLeft') {
    let currentImageIndex = findImageIndex();
    let prevImageIndex = currentImageIndex - 1;
    prevImageIndex < 0
      ? (currentImageIndex = galleryItems.length - 1)
      : (currentImageIndex -= 1);
    const prevImage = galleryItems.find((item, index) => {
      if (currentImageIndex === index) return item;
    });
    lightboxImage.src = prevImage.original;
  }
};

gallery.addEventListener('click', openModal);
lightbox.addEventListener('click', closeModal);
document.addEventListener('keyup', closeModal);
document.addEventListener('keyup', showNextImage);
document.addEventListener('keyup', showPrevImage);
