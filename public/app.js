const date = document.getElementById('date');
const currentYear = new Date().getFullYear();
date.textContent = currentYear;

// toggle

const navBtn = document.querySelector('.nav-btn');
const links = document.querySelector('.nav-links');
const closeSidebar = document.querySelector('.close-sideBar');

navBtn.addEventListener('click', function () {
  if (window.innerWidth < 767) {
    links.classList.remove('side-bar');
  }
  // links.classList.add('side-bar');
});

closeSidebar.addEventListener('click', function () {
  // links.style.transform = 'translate(-100%)';
  links.classList.add('side-bar');
});

// console.log(window.innerWidth);

window.addEventListener('resize', function () {
  if (window.innerWidth < 768) {
    links.classList.add('side-bar');
  } else {
    links.classList.remove('side-bar');
    // links.classList.add('close-sideBar');
  }
});

// modal

const modal = document.querySelectorAll('.modal');
const openModal = document.querySelector('.open-modal');
const openContainer = document.querySelector('.open-container');

const prevBtn = document.querySelector('.btn-prev');
const nextBtn = document.querySelector('.btn-next');

openModal.addEventListener('click', function () {
  this.style.display = 'none';
  openContainer.style.display = 'none';

  document.body.classList.remove('modal-active');
});

modal.forEach(function (btn, index) {
  btn.addEventListener('click', function () {
    openModal.style.display = 'block';
    openContainer.style.display = 'block';

    document.body.classList.add('modal-active');

    currentImageIdx = index + 1;
    currentImageDisplay(currentImageIdx);
  });
});

function currentImageDisplay() {
  openContainer.style.background = `url(./assets/img/services-${currentImageIdx}.jpg) center/cover no-repeat`;
}

prevBtn.addEventListener('click', function () {
  currentImageIdx--;
  if (currentImageIdx === 0) {
    currentImageIdx = modal.length;
  }
  currentImageDisplay(currentImageIdx);
});

nextBtn.addEventListener('click', function () {
  currentImageIdx++;
  if (currentImageIdx === 7) {
    currentImageIdx = 1;
  }
  currentImageDisplay(currentImageIdx);
});
