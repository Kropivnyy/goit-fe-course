import Masonry from 'masonry-layout';

export default {
  msnry: {},
  initMasonry() {
    this.msnry = new Masonry('.grid', {
      itemSelector: '.photo-item',
      columnWidth: '.grid__col-sizer',
      gutter: '.grid__gutter-sizer',
      percentPosition: true,
      stagger: 30,
      visibleStyle: { transform: 'translateY(0)', opacity: 1 },
      hiddenStyle: { transform: 'translateY(100px)', opacity: 0 },
    });
  },
  resetMasonry() {
    this.msnry = {};
  },
};
