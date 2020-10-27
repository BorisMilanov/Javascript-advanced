"use strict";

function solve() {
  var box = document.getElementById('box');
  var ddList = document.getElementById('dropdown-ul');
  window.addEventListener('click', function (e) {
    if (e.target.id === 'dropdown') {
      ddList.style.display = 'block';
      return;
    }

    if (e.target.closest('#dropdown-ul')) {
      var backgroundColor = e.target.innerText;
      box.style.backgroundColor = backgroundColor;
      box.style.color = 'black';
    }

    ddList.style.display = '';
  });
}