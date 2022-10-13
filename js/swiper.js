const sliders = document.querySelectorAll('.swiper');
var mySwiper

function mobileSlider() {

  for (var i = 0; i < sliders.length; i++) {
    var slider = sliders[i];

    if (window.innerWidth < 767 && slider.dataset.mobile == 'false') {

      mySwiper = new Swiper(slider, {
        direction: 'horizontal',
        loop: true,
        pagination: {
          el: slider.querySelector('.swiper-pagination'),
          clickable: true,
        },
        slidesPerView: "auto",
        spaceBetween: 16,

      });

      slider.dataset.mobile = 'true';
    }

    if (window.innerWidth > 767) {
      slider.dataset.mobile = 'false';

      if (slider.classList.contains('swiper-initialized')) {
        mySwiper.destroy();
      }
    }

  }

}

mobileSlider();
window.addEventListener('resize', () => {
  mobileSlider();
});