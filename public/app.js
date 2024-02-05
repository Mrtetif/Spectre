// nav bar button

const navBtn = document.querySelector('.nav-btn');
const links = document.querySelector('.nav-links');

navBtn.addEventListener('click', function () {
  if (links.classList.contains('show-links')) {
    links.classList.remove('show-links');
  } else {
    links.classList.add('show-links');
  }
});

const date = document.getElementById('date');
const currentYear = new Date().getFullYear();
date.textContent = currentYear;

// to top button

const btnTop = document.querySelector('.btn-top');
const docScroll = document.body.scrollTop;

window.addEventListener('scroll', function () {
  if (docScroll > 80 || this.document.documentElement.scrollTop > 80) {
    btnTop.classList.remove('none');
  } else {
    btnTop.classList.add('none');
  }
});

btnTop.addEventListener('click', function () {
  function scrollToTop() {
    var position =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (position) {
      window.scrollBy(0, -Math.max(1, Math.floor(position / 10)));
      scrollAnimation = setTimeout('scrollToTop()', 30);
    } else clearTimeout(scrollAnimation);
  }
});

// modal

const modalOverlay = document.querySelectorAll('.modal-overlay');
const relative = document.querySelectorAll('.relative');
const openModal = document.querySelector('.open-modal');
const openContainer = document.querySelector('.open-container');

const prevBtn = document.querySelector('.btn-prev');
const nextBtn = document.querySelector('.btn-next');

let currentImageIdx = 0;

openModal.addEventListener('click', function () {
  this.style.display = 'none';
  openContainer.style.display = 'none';

  document.body.classList.remove('modal-active');
});

modalOverlay.forEach(function (btn, index) {
  btn.addEventListener('click', function () {
    openModal.style.display = 'block';
    openContainer.style.display = 'block';

    document.body.classList.add('modal-active');

    currentImageIdx = index + 1;
    currentImageDisplay(currentImageIdx);
  });
});

function currentImageDisplay() {
  openContainer.style.background = `url(./assets/images/gallery-home-${currentImageIdx}-463x383.jpg) center/cover no-repeat`;
}

prevBtn.addEventListener('click', function () {
  currentImageIdx--;
  if (currentImageIdx === 0) {
    currentImageIdx = relative.length;
  }
  currentImageDisplay(currentImageIdx);
});

nextBtn.addEventListener('click', function () {
  currentImageIdx++;
  if (currentImageIdx === 9) {
    currentImageIdx = 1;
  }
  currentImageDisplay(currentImageIdx);
});
