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

const imageList = {
  eppkm: ['eppkm/01.png', 'eppkm/02.png', 'eppkm/03.png', 'eppkm/04.png'],
  crime: [
    'Crime Analysis/01 Tampilan Awal.png',
    'Crime Analysis/03 Tampilan Zoom Location.png',
    'Crime Analysis/05 Tampilan What deselect.png',
    'Crime Analysis/07 Tampilan filter zona 2.png',
    'Crime Analysis/11 Tampilan Time Range 3.png',
    'Crime Analysis/14 Tampilan Summary 3.png',
    'Crime Analysis/16 Tampilan Report 2.png',
    'Crime Analysis/18 Tampilan Chart 2.png',
  ],
  intelligence: [
    'geo_intelligence/01 Utama.png',
    'geo_intelligence/02 Feature import.png',
    'geo_intelligence/03 Feature Drawing.png',
    'geo_intelligence/04 Feature layering.png',
    'geo_intelligence/05 Feature change basemap.png',
    'geo_intelligence/06 Feature Setting.png',
    'geo_intelligence/07 Feature Simpan.png',
  ],
  maxxcbt: [
    'maxxCBT/01 Tampilan halaman awal.png',
    'maxxCBT/02 Tampilan login.png',
    'maxxCBT/03 Tampilan dashboard.png',
    'maxxCBT/04 Tampilan Master sekolah.png',
    'maxxCBT/05 Tambah pelamar.png',
    'maxxCBT/06 Tampilan Data soal.png',
    'maxxCBT/07 Tampilan master divisi.png',
    'maxxCBT/08 Tampilan room.png',
    'maxxCBT/09 Tampilan pengerjaan soal.png',
    'maxxCBT/10 Tampilan hasil.png',
    'maxxCBT/11 Tampilan data pelamar.png',
    'maxxCBT/12 Tampilan paket soal.png',
    'maxxCBT/13 Tampilan subsoal.png',
  ],
  knowledge: [
    'knowledge_app/01 tampilan landingpage.png',
    'knowledge_app/02 tampilan kategori.png',
    'knowledge_app/03 tampilan tambah product.png',
    'knowledge_app/04 tampilan data marketing.png',
    'knowledge_app/05 tampilan list product.png',
    'knowledge_app/06 tampilan detail product.png',
    'knowledge_app/07 Tampilan Dashboard.png',
  ],
  si_produksi: [
    'SI_produksi/01 dashboard.png',
    'SI_produksi/00 Tampilan login.png',
    'SI_produksi/02 tampilan users.png',
    'SI_produksi/03 tampilan data mesin.png',
    'SI_produksi/04 tampilan jadwal.png',
    'SI_produksi/05 tampilan data produksi.png',
  ],
  pushidrosal: ['pushidrosal/Halaman Utama 1.png', 'pushidrosal/GeoSpatialEnavigation.png', 'pushidrosal/Halaman Utama 2.png', 'pushidrosal/Halaman Utama 3.png'],
  slog: ['slog_polri/slog_1.png', 'slog_polri/slog_2.png', 'slog_polri/slog_3.png', 'slog_polri/slog_4.png', 'slog_polri/slog_5.png', 'slog_polri/slog_6.png', 'slog_polri/slog_7.png', 'slog_polri/slog_8.png'],
};

function showImagePortfolio(title) {
  const swiperWrapper = document.getElementById('img-swiper');
  let html = '';
  for (const image of imageList[title]) {
    html += `<div class="swiper-slide w-100">
                <img src="src/public/project/${image}" alt="${title}" class="img-fluid" />
            </div>`;
  }
  swiperWrapper.innerHTML = html;

  new Swiper('.mySwiperModal', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  $('#modalFullImage').modal('show');
}
// particlesJS.load('particles-js', 'particlesjs-config.json', function () {
//   console.log('callback - particles.js config loaded');
// });
