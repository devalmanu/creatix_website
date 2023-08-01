// Подключение свайпера
import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

const bodyStyles = window.getComputedStyle(document.body);
const gap = parseInt(bodyStyles.getPropertyValue('--grid-gap'));
const portSlider = document.querySelector('.portfolio-section__slider');
const portfolioParent = portSlider?.closest('.portfolio-section');

const relatedSlider = document.querySelector('.related-projects__slider');
const relatedParent = relatedSlider?.closest('.related-projects');

if (portSlider) {
  const portfolioSlider = new Swiper(portSlider, {
    slidesPerView: 3,
    spaceBetween: gap,
    loop: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: portfolioParent.querySelector('.portfolio-section__next'),
      prevEl: portfolioParent.querySelector('.portfolio-section__prev'),
    },

    breakpoints: {
      576: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 3,
      }
    }
  });
}


const testimonialsSlider = new Swiper('.testimonials__slider', {
  slidesPerView: 1,
  spaceBetween: gap,
  loop: true,
  navigation: {
    nextEl: '.testimonials__next',
    prevEl: '.testimonials__prev',
  },
});


if (relatedSlider) {
  const relatedProjSlider = new Swiper(relatedSlider, {
    slidesPerView: 1,
    spaceBetween: gap,
    watchSlidesProgress: true,

    navigation: {
      nextEl: relatedParent.querySelector('.portfolio-section__next'),
      prevEl: relatedParent.querySelector('.portfolio-section__prev'),
    },
    breakpoints: {
      576: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 3,
      }
    }
  });
}
