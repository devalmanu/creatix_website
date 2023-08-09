// Подключение свайпера
import Swiper, { Navigation, Pagination, Thumbs } from 'swiper';
Swiper.use([Navigation, Pagination, Thumbs]);

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

const workSwiper = document.querySelector('.work-images');

if(workSwiper) {

  const workImagesThumbs = new Swiper(".work-images__thumb", {
    spaceBetween: 20,
    freeMode: true,
    watchSlidesProgress: true,
    slidesPerView: 3,
    breakpoints: {
      420: {
        slidesPerView: 4
      },
      576: {
        slidesPerView: 5
      },
      768: {
        slidesPerView: 7,
      },
      992: {
        slidesPerView: 'auto',
      }
    }
  });
  const workImagesMain = new Swiper(".work-images__swiper", {
    spaceBetween: 20,
    slidesPerView: 1,
    navigation: {
      nextEl: workSwiper.querySelector('.work-images__next'),
      prevEl: workSwiper.querySelector('.work-images__prev'),
    },
    thumbs: {
      swiper: workImagesThumbs,
    },
  });
}


