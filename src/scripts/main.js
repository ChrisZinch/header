'use strict';

const header = document.querySelector('.header');
const button = document.querySelector('.toggle-btn');

const logged = () => {
  header.classList.add('logged');
};

button.addEventListener('click', logged);
