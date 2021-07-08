const hotelSlider = new Swiper('.hotel-slider  ', {
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
});

const reviewsSlider = new Swiper('.reviews-slider  ', {
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
});

var menuButton = document.querySelector('.burger');
menuButton.addEventListener('click', () => {
  document.querySelector('.navbar-bot').classList.toggle('navbar-bot--active');
});