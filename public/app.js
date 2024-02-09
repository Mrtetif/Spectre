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

console.log(window.innerWidth);

window.addEventListener('resize', function () {
  if (window.innerWidth < 768) {
    links.classList.add('side-bar');
  } else {
    links.classList.remove('side-bar');
    // links.classList.add('close-sideBar');
  }
});
