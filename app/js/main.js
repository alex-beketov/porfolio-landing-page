"use strict";

const header = document.querySelector('.header');
const body = document.body;
const headerBurger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__nav');
const headerLinks = document.getElementsByClassName('header__link');
const headerAnchors = document.getElementsByClassName('header__anchor');

headerBurger.addEventListener('click', () => {
   headerBurger.classList.toggle('active');
   headerMenu.classList.toggle('active');
   document.body.classList.toggle('lock')
});

Array.from(headerLinks).forEach((headerLink) => {
   headerLink.addEventListener('click', function (event) {
      headerBurger.classList.remove('active');
      headerMenu.classList.remove('active')
      document.body.classList.remove('lock')
   });
})

Array.from(headerAnchors).forEach(headerAnchor => {
   headerAnchor.addEventListener('click', function (event) {
      event.preventDefault();
      const blockHref = headerAnchor.getAttribute('href');
      const blockCoordinates = document.querySelector('' + blockHref).getBoundingClientRect().top + pageYOffset - header.offsetHeight;
      window.scrollTo({
         behavior: 'smooth',
         top: blockCoordinates,
      })
   })
})

function onEntry(entry) {
   entry.forEach(change => {
      if (change.isIntersecting) {
         change.target.classList.add('element-show');
      }
   });
}

let options = {
   threshold: [0.5]
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');
let photos = document.querySelectorAll('.photo-animation')

for (let elm of elements) {
   observer.observe(elm);
}

for (let photo of photos) {
   observer.observe(photo)
}
