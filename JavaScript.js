﻿document.addEventListener('DOMContentLoaded', function () {
const circle = document.getElementById('circle');

document.addEventListener('mousemove', e => {
    circle.style.left = e.pageX + 'px';
    circle.style.top = e.pageY + 'px';
});
});