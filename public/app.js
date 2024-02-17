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

// gallery

const gallery = [
  {
    id: 1,
    img: './assets/img/services-1.jpg',
    name: 'Nautic Services',
  },
  {
    id: 2,
    img: './assets/img/services-2.jpg',
    name: 'Adeneas',
  },
  {
    id: 3,
    img: './assets/img/services-3.jpg',
    name: 'Space',
  },
  {
    id: 4,
    img: './assets/img/services-4.jpg',
    name: 'Brave',
  },
  {
    id: 5,
    img: './assets/img/services-5.jpg',
    name: 'byHumans',
  },
  {
    id: 6,
    img: './assets/img/services-6.jpg',
    name: 'hastPhoto',
  },
];

const project = document.querySelector('.projects-container');

window.addEventListener('DOMContentLoaded', function () {
  let singleItem = gallery.map(function (item) {
    return `<article class="project">
            <div class="item">
              <img
                class="img"
                src=${item.img}
                alt="Nautic Services"
              />
              <div class="modal" onclick="">
                <!--<i class="fa fa-search-plus"></i>-->
                <h5>${item.name}</h5>
              </div>
            </div>
          </article>`;
  });
  singleItem = singleItem.join('');
  project.innerHTML = singleItem;
});

// fixed nav-bar

const navBar = document.querySelector('.navbar');

window.addEventListener('scroll', function () {
  // console.log(window.scrollY + 'px');
  const scrollHeight = this.window.scrollY;
  const navHeight = navBar.getBoundingClientRect().height;

  if (scrollHeight > navHeight) {
    navBar.classList.add('fixed-nav');
  } else {
    navBar.classList.remove('fixed-nav');
  }
});
