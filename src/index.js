import './style.css';
import postData from './modules/dataAPI.js';
import getData from './modules/getData.js';
import render from './modules/render.js';

const form = document.querySelector('.score-form');
const refresh = document.querySelector('#refresh_btn');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  postData();
  document.querySelector('#name').value = '';
  document.querySelector('#score').value = '';
});
refresh.addEventListener('click', (e) => {
  e.preventDefault();
  getData();
  render();
});
window.onload = render();