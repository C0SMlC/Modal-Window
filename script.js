'use strict';

const btn = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closebtn = document.querySelector('.close-modal');

function closer() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

const work = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

btn.forEach(element => element.addEventListener('click', work));
closebtn.addEventListener('click', closer);

overlay.addEventListener('click', closer);
