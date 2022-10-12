const slider = document.querySelector('.swiper');
let mySwiper

function mobileSlider() {
  if (window.innerWidth <= 767 && slider.dataset.mobile == 'false') {
    mySwiper = new Swiper(slider, {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      slidesPerView: "auto",
      spaceBetween: 16,

    });

    slider.dataset.mobile = 'true';
  }

  if (window.innerWidth > 767) {
    slider.dataset.mobile = 'false';
    
    if(slider.classList.contains('swiper-initialized')){
      mySwiper.destroy();
    }    

  }
}

mobileSlider ();
window.addEventListener('resize', () => {
  mobileSlider ();
});


var btn = document.querySelector('.section__btn');
var btnIcon = document.querySelector('.btn__expand')


btn.onclick = function () {
  slider.classList.toggle('swiper--height');
  btnIcon.classList.toggle('btn__expand--rotate')

}




  /*
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    
    spaceBetween: 16,

    breakpoints: {
      320: {
        slidesPerView: 1.31,
      },
      380: {
        slidesPerView: 1.6,
      },
      460: {
        slidesPerView: 1.85,
      },
      520: {
        slidesPerView: 2.08,
      },
      560: {
        slidesPerView: 2.25,
      },
      620: {
        slidesPerView: 2.45,
      },
      680: {
        slidesPerView: 2.7,
      },
      740: {
        slidesPerView: 2.9,
      },

    }

  }); */


/*
  const slider = document.querySelector('.swiper');

function mobileSlider() {
  if (window.innerWidth <= 767 && slider.dataset.mobile == 'false') {
    mySwiper = new Swiper(slider, {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
  
      
      spaceBetween: 16,
  
      breakpoints: {
        320: {
          slidesPerView: 1.31,
        },
        380: {
          slidesPerView: 1.6,
        },
        460: {
          slidesPerView: 1.85,
        },
        520: {
          slidesPerView: 2.08,
        },
        560: {
          slidesPerView: 2.25,
        },
        620: {
          slidesPerView: 2.45,
        },
        680: {
          slidesPerView: 2.7,
        },
        740: {
          slidesPerView: 2.9,
        },
  
      }
  
    });

    slider.dataset.mobile = 'true';
  }

  if (window.innerWidth > 768) {
    slider.dataset.mobile = 'false';
    if (slider.classList.contains('swiper-container-initialized')) {
      mySwiper.destroy();
    }
  }
}

mobileSlider()

window.addEventListener('resize', () => {
  mobileSlider();
});
*/