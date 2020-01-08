'use strict';

const title = document.title;
const menuTitle = document.getElementById('menu-title');
menuTitle.innerHTML = title;

const footerYear = document.getElementById('footer-year');
const now = new Date();
footerYear.innerHTML = now.getFullYear();

const VERSION_NUMBER = '0.0.1';
const versionSpan = document.querySelector('span#version');
versionSpan.innerHTML = VERSION_NUMBER;