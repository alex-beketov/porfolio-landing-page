"use strict";

const headerBurger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__nav');
const headerLinks = document.getElementsByClassName('header__link');
// const headerAnchor = document.getElementsByClassName('header__anchor');

headerBurger.addEventListener('click', () =>{
   headerBurger.classList.toggle('active');
   headerMenu.classList.toggle('active');
   document.body.classList.toggle('lock')
});

Array.from(headerLinks).forEach((headerLink) => {
   headerLink.addEventListener('click' ,function(event){
      headerBurger.classList.remove('active');
      headerMenu.classList.remove('active')
      document.body.classList.remove('lock')
   });   
})

// Array.from(headerAnchor).forEach((headerAnchor) => {
//    headerAnchor.addEventListener('click', function(event){
//       event.preventDefault();
//       const coordinates = headerAnchor.getAttribute('href');
//       document.querySelector(coordinates).scrollIntoView({
//          behavior:"smooth",
//          block:'start'
//       })
//    })
// })

// setTimeout(() => {window.scrollTo(0, document.querySelector('#Skills').offsetTop - document.querySelector('.header').clientHeight)}, 1000)

setTimeout(() => {document.querySelector('#Portfolio').scrollIntoView({
   block:'start',
   behavior:'smooth'
})}, 1000)
