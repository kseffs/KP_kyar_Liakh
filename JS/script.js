//Для языка
const translations = {
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

let buttons = document.querySelectorAll('.language__point');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {
    for (let j = 0; j < buttons.length; j++) {
      buttons[j].classList.remove('language__point__active');
    }

    this.classList.add('language__point__active');

    let lang = this.dataset.lang;
    switchLanguage(lang);
  });
}


//Для слайдера

    document.addEventListener("DOMContentLoaded", () => {
        const emblaNode = document.querySelector(".embla");
        const viewportNode = emblaNode.querySelector(".embla__viewport");
        const prevBtn = emblaNode.querySelector(".embla__button--prev");
        const nextBtn = emblaNode.querySelector(".embla__button--next");
        const dotsNode = emblaNode.querySelector(".embla__dots");

        const OPTIONS = {
            loop: true,        
            slidesToScroll: 1,   
            align: "start"       
        };

        const emblaApi = EmblaCarousel(viewportNode, OPTIONS);

        prevBtn.addEventListener("click", () => emblaApi.scrollPrev());
        nextBtn.addEventListener("click", () => emblaApi.scrollNext());

        let autoPlay = setInterval(() => emblaApi.scrollNext(), 3000);
        function resetAutoPlay() {
            clearInterval(autoPlay);
            autoPlay = setInterval(() => emblaApi.scrollNext(), 3000);
        }
        prevBtn.addEventListener("click", resetAutoPlay);
        nextBtn.addEventListener("click", resetAutoPlay);

        const dots = emblaApi.scrollSnapList().map(() => {
            const dot = document.createElement("button");
            dot.classList.add("embla__dot");
            dotsNode.appendChild(dot);
            return dot;
        });

        dots.forEach((dot, index) => {
            dot.addEventListener("click", () => {
                emblaApi.scrollTo(index);
                resetAutoPlay();
            });
        });

        function updateDots() {
            const selected = emblaApi.selectedScrollSnap();
            dots.forEach((dot, i) => {
                dot.classList.toggle("is-selected", i === selected);
            });
        }

        emblaApi.on("select", updateDots);
        updateDots();
    });