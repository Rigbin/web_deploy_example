'use strict';

const title = document.title;
const menuTitle = document.getElementById('menu-title');
menuTitle.innerHTML = title;

const footerYear = document.getElementById('footer-year');
const now = new Date();
footerYear.innerHTML = now.getFullYear();