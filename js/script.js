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

    var swiper = new Swiper(".box-room-img", {
      spaceBetween: 30,
      effect: "fade",
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
      speed: 200,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });


document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".fade-section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    {
      threshold: 0.2, // 20% terlihat baru animasi jalan
    }
  );

  sections.forEach((section) => observer.observe(section));
});
