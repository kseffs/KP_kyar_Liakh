"use strict";

//Для языка
var translations = {
  ru: {
    name: 'КОЛЬЦО TRINITY, CARTIER',
    material: 'Белое золото, бриллианты',
    price: '498 000 ₽',
    collection: 'Смотреть коллекцию'
  },
  en: {
    name: 'TRINITY RING, CARTIER',
    material: 'White gold, diamonds',
    price: '₽ 498,000',
    collection: 'View collection'
  }
};

function switchLanguage(lang) {
  document.getElementById('jewel-name').textContent = translations[lang].name;
  document.getElementById('jewel-material').textContent = translations[lang].material;
  document.getElementById('jewel-price').textContent = translations[lang].price;
  document.getElementById('collection-link').textContent = translations[lang].collection;
}

var buttons = document.querySelectorAll('.language__point');

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {
    for (var j = 0; j < buttons.length; j++) {
      buttons[j].classList.remove('language__point__active');
    }

    this.classList.add('language__point__active');
    var lang = this.dataset.lang;
    switchLanguage(lang);
  });
}