"use strict";

const headerBurger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__nav');
const headerLinks = document.getElementsByClassName('header__link');

headerBurger.addEventListener('click', () =>{
   headerBurger.classList.toggle('active');
   headerMenu.classList.toggle('active');
   document.body.classList.toggle('lock')
});

Array.from(headerLinks).forEach((headerLink) => {
   headerLink.addEventListener('click' ,() => {
      headerBurger.classList.remove('active');
      headerMenu.classList.remove('active')
      document.body.classList.remove('lock')
   });   
})