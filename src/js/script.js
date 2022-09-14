AOS.init();

function changeNav(obj) {
  const navLink = document.querySelectorAll('.nav-link');
  for (const link of navLink) {
    link.classList.remove('active');
  }
  obj.children[0].classList.add('active');
}
var swiper = new Swiper('.mySwiper', {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
// particlesJS.load('particles-js', 'particlesjs-config.json', function () {
//   console.log('callback - particles.js config loaded');
// });
