document.addEventListener('DOMContentLoaded', function () {
  // Pastikan elemen swiper ada di halaman
  var heroBannerEl = document.querySelector('.herobanner');
  if (!heroBannerEl) {
    console.warn('Swiper: elemen .herobanner tidak ditemukan');
    return;
  }

  var swiperLogoSettings = {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 20,
    loop: true,
    grabCursor: false,
    speed: 800,

    // AUTO SLIDE
    autoplay: {
      delay: 3000,         // jeda 3 detik antar slide
      disableOnInteraction: false, // setelah di-swipe manual tetap lanjut auto
    },

    pagination: {
      el: '.swiper-mobile-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + ' custom-bullet-about"></span>';
      },
    },
  };

  // Inisialisasi Swiper
  var logoSwiper = new Swiper('.herobanner', swiperLogoSettings);
});
