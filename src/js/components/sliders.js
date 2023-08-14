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


const heroSliderSpeed = 1500;

const fooBar = bodyStyles.getPropertyValue('--hero-slider-speed'); //get

document.body.style.setProperty('--hero-slider-speed', heroSliderSpeed + 'ms');//set

const heroSliderMain = document.querySelector('.hero-slider');
if(heroSliderMain) {
  const heroSlider = new Swiper(heroSliderMain, {
    slidesPerView: 1,
    navigation: {
      nextEl: heroSliderMain.querySelector('.hero__next'),
      prevEl: heroSliderMain.querySelector('.hero__prev'),
    },
    speed: heroSliderSpeed,
    autoplay: {
      delay: 1000,
    },
    pagination: {
      el: '.hero__pag',
      type: 'bullets',
      clickable: true
    },
    on: {
        init: function () {
          const paginationBullets = document.querySelectorAll('.hero__pag .swiper-pagination-bullet');

          paginationBullets.forEach(el => {
            el.innerHTML = `<span class="hero__bar"></span>`;
          });
        },
      },
  });
}

const historySlider = document.querySelector('.history-slider');
const historyParent = historySlider?.closest('.history');
if(historySlider) {
  const historyBtns = document.querySelectorAll('.history-nav__btn');

  const history = new Swiper(historySlider, {
    slidesPerView: 1,
    spaceBetween: gap,
    navigation: {
      nextEl: historyParent.querySelector('.history-nav__next'),
      prevEl: historyParent.querySelector('.history-nav__prev'),
    },
  });

  historyBtns.forEach((el, idx) => {
    el.setAttribute('data-index', idx);

    el.addEventListener('click', (e) => {
      const index = e.currentTarget.dataset.index;
      historyBtns.forEach(el => {
        el.classList.remove('history-nav__btn--active');
      });

      e.currentTarget.classList.add('history-nav__btn--active');

      history.slideTo(index);
    });
  });

  history.on('slideChange', function () {
    console.log(history.realIndex);

    historyBtns.forEach(el => {
      el.classList.remove('history-nav__btn--active');
    });

    document.querySelector(`.history-nav__btn[data-index="${history.realIndex}"]`).classList.add('history-nav__btn--active');
  });


}
