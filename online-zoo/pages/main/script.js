console.log('Выполнены следующие части задания:\n\n1) Landing and Donate - бургер меню для ширины экрана 640px и менее (+10)\n2) Landing - Карусель в блоке Pets для ширины экрана 1600px, 1000px и 640px (+30)\n3) Попап при нажатии на отзыв в блоке Testimonials для ширины экрана 640px и 320px (+10)\n4) Панель Amount в блоке Pick and feed a friend для ширины экрана 1600px, 1000px, 640px и менее (+30)\n\nP.s. При изменении ширины экрана нужно перезагрузить страницу ');

//burger menu
const navigation = document.querySelector('.navigation');
const burgerMenu = document.querySelector('.burger');
const closeMenuButton = document.querySelector('.nav-close');
const navList = document.querySelector('.nav-list');
const wrapper = document.querySelector('.wrapper');

burgerMenu.onclick = function () {
  navigation.classList.add('navigation-active');
  wrapper.classList.add('wrapper-active');
}

closeMenuButton.onclick = function () {
  navigation.classList.remove('navigation-active');
  wrapper.classList.remove('wrapper-active');
}

navList.onclick = function () {
  navigation.classList.remove('navigation-active');
  wrapper.classList.remove('wrapper-active');
}

wrapper.onclick = function () {
  navigation.classList.remove('navigation-active');
  wrapper.classList.toggle('wrapper-active');
}

//testimonials pop-up <= 640px
let reviewsArr = document.querySelectorAll('.testimonials-item');
let reviewPopup = document.querySelector('.review');
let reviewWrapper = document.querySelector('.review-wrapper');

function showHideReview () {
  reviewPopup.classList.toggle('review-visible');
  reviewWrapper.classList.toggle('review-wrapper-active');
}

function fillReview(index) {
  let reviewAvatar = document.querySelector('.review-avatar');
  let reviewName = document.querySelector('.review-author-name');
  let reviewDest = document.querySelector('.review-author-destination');
  let reviewDate = document.querySelector('.review-author-date');
  let reviewTexts = document.querySelectorAll('.review-testimonials-text');

  const avatarsArr = document.querySelectorAll('.author-avatar');
  const namesArr = document.querySelectorAll('.author-name');
  const destinationsArr = document.querySelectorAll('.author-destination');
  const datesArr = document.querySelectorAll('.author-date');
  const textsArr = document.querySelectorAll('.testimonials-text');

  reviewName.innerHTML = namesArr[index].textContent;
  reviewDest.innerHTML = destinationsArr[index].textContent;
  reviewDate.innerHTML = datesArr[index].textContent;
  reviewAvatar.setAttribute('src', `../../assets/images/author-avatar${index + 1}.svg`);
  reviewTexts[0].innerHTML = textsArr[index*2].textContent;
  reviewTexts[1].innerHTML = textsArr[index*2 + 1].textContent;
  showHideReview();
}

if (window.innerWidth <= 980) {
  reviewsArr.forEach((reviewItem, index) => {
    reviewItem.addEventListener('click', (event) => {
      fillReview(index);
    });
  });
}

if (window.innerWidth <= 980) {
  reviewWrapper.onclick = function () {
  reviewPopup.classList.toggle('review-visible');
  reviewWrapper.classList.toggle('review-wrapper-active');
  }
}

//pets carousel
const json = [{
    "name": "GIANT PANDAS",
    "location": "Native to Southwest China",
    "image": "../../assets/images/pets/pandas.jpg",
    "meal": "../../assets/icons/pet-banana-bamboo.svg"
  },
  {
    "name": "EAGLES",
    "location": "Native to South America",
    "image": "../../assets/images/pets/eagle.jpg",
    "meal": "../../assets/icons/pet-meet-fish.svg"
  },
  {
    "name": "GORILLAS",
    "location": "Native to Congo",
    "image": "../../assets/images/pets/gorilla.jpg",
    "meal": "../../assets/icons/pet-banana-bamboo.svg"
  },
  {
    "name": "TWO-TOED SLOTH",
    "location": "Mesoamerica, South America",
    "image": "../../assets/images/pets/sloth.jpg",
    "meal": "../../assets/icons/pet-banana-bamboo.svg"
  },
  {
    "name": "CHEETAHS",
    "location": "Native to Africa",
    "image": "../../assets/images/pets/cheetahs.jpg",
    "meal": "../../assets/icons/pet-meet-fish.svg"
  },
  {
    "name": "PENGUINS",
    "location": "Native to Antarctica",
    "image": "../../assets/images/pets/pinguin.jpg",
    "meal": "../../assets/icons/pet-meet-fish.svg"
  },
  {
    "name": "FOX",
    "location": "all of Europe",
    "image": "../../assets/images/pets/fox.jpg",
    "meal": "../../assets/icons/pet-meet-fish.svg"
  },
  {
    "name": "PRZEWALSKI HORSE",
    "location": "western Mongolia",
    "image": "../../assets/images/pets/horse_prj.jpg",
    "meal": "../../assets/icons/pet-banana-bamboo.svg"
  },
  {
    "name": "HYENA",
    "location": "Native to Africa",
    "image": "../../assets/images/pets/hyena.jpg",
    "meal": "../../assets/icons/pet-meet-fish.svg"
  },
  {
    "name": "JERBOA",
    "location": "Asia west",
    "image": "../../assets/images/pets/jerboa.jpg",
    "meal": "../../assets/icons/pet-banana-bamboo.svg"
  },
  {
    "name": "KENGURU",
    "location": "Native to Australia",
    "image": "../../assets/images/pets/kenguru.jpg",
    "meal": "../../assets/icons/pet-banana-bamboo.svg"
  },
  {
    "name": "OWL",
    "location": "Native to Europe",
    "image": "../../assets/images/pets/owl.jpg",
    "meal": "../../assets/icons/pet-meet-fish.svg"
  },
  {
    "name": "PUMA",
    "location": "Native to America",
    "image": "../../assets/images/pets/puma.jpg",
    "meal": "../../assets/icons/pet-meet-fish.svg"
  },
  {
    "name": "ZUBR",
    "location": "Native to Eastern Europe",
    "image": "../../assets/images/pets/zubr.jpg",
    "meal": "../../assets/icons/pet-banana-bamboo.svg"
  },
  {
    "name": "WOLF",
    "location": "Native to Europe",
    "image": "../../assets/images/pets/wolf.jpg",
    "meal": "../../assets/icons/pet-meet-fish.svg"
  }
];

const animals = JSON.parse(JSON.stringify(json));
console.log(animals);

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

let randomNumArr = [];
function fillArr (start, end, total) {
  while (randomNumArr.length < total) {
    let randomEl = getRandomIntInclusive(start, end);
    arrElem = randomEl;
    if (!randomNumArr.includes(arrElem)) {
      randomNumArr.push(arrElem);
    }
  }
  return randomNumArr;
}

function clearArr () {
  randomNumArr.length = 0;
}

const createCardTemplate = (animalNum) => {

  const card = document.createElement('div');
  card.classList.add('card');
  const figure = document.createElement('figure');
  figure.classList.add('card-content');
  card.appendChild(figure);
  const image = new Image(364, 364);
  image.classList.add('card-image');
  image.alt = animals[animalNum].name;
  image.src = `${animals[animalNum].image}`;
  figure.appendChild(image);
  const figcaption = document.createElement('figcaption');
  figcaption.classList.add('card-text');
  const bgImage = new Image();
  figcaption.style.backgroundImage = `url(${animals[animalNum].meal})`;
  figure.appendChild(figcaption);
  const cardTitle = document.createElement('p');
  cardTitle.classList.add('card-title');
  cardTitle.textContent = animals[animalNum].name;
  figcaption.appendChild(cardTitle);
  const petDesc = document.createElement('p');
  petDesc.classList.add('pet-desc');
  petDesc.textContent = animals[animalNum].location;
  figcaption.appendChild(petDesc);
  return card;
}

const leftArrow = document.querySelector('.arrow-left');
const rightArrow = document.querySelector('.arrow-right');
const carousel = document.querySelector('.carousel');
const cardsLeft = document.querySelector('.cards-left');
const cardsRight = document.querySelector('.cards-right');
const leftArrowSmall = document.querySelector('.arrow-left-small');
const rightArrowSmall = document.querySelector('.arrow-right-small');

function createLeftElements(number) {
  fillArr(0, 14, number);
  cardsLeft.innerHTML = '';
  for (let i = 0; i < number; i++) {
    let cardAdded = createCardTemplate(randomNumArr[i]);
    cardsLeft.appendChild(cardAdded);
  }
  clearArr();
}

function createRightElements(number) {
  fillArr(0, 14, number);
  cardsRight.innerHTML = '';
  for (let i = 0; i < number; i++) {
    let cardAdded = createCardTemplate(randomNumArr[i]);
    cardsRight.appendChild(cardAdded);
  }
  clearArr();
}

if (window.innerWidth > 980) {
  window.addEventListener('load', createLeftElements(6));
  window.addEventListener('load', createRightElements(6));
} else if (window.innerWidth <= 980 && window.innerWidth > 600) {
  window.addEventListener('load', createLeftElements(4));
  window.addEventListener('load', createRightElements(4));
}


const moveLeft = () => {
  carousel.classList.add('transition-left');
  leftArrow.removeEventListener('click', moveLeft);
  rightArrow.removeEventListener('click', moveRight);
  leftArrowSmall.removeEventListener('click', moveLeft);
  rightArrowSmall.removeEventListener('click', moveRight);
  if (window.innerWidth > 980) {
    fillArr(0, 14, 6);
  } else if (window.innerWidth <= 980 && window.innerWidth > 600) {
    fillArr(0, 14, 4);
  }
  console.log(`Номера животных - ${randomNumArr}`);
}

const moveRight = () => {
  carousel.classList.add('transition-right');
  leftArrow.removeEventListener('click', moveLeft);
  rightArrow.removeEventListener('click', moveRight);
  leftArrowSmall.removeEventListener('click', moveLeft);
  rightArrowSmall.removeEventListener('click', moveRight);
  if (window.innerWidth > 980) {
    fillArr(0, 14, 6);
  } else if (window.innerWidth <= 980 && window.innerWidth > 600) {
    fillArr(0, 14, 4);
  }
  console.log(`Номера животных - ${randomNumArr}`);
}

leftArrow.addEventListener('click', moveLeft);
rightArrow.addEventListener('click', moveRight);
leftArrowSmall.addEventListener('click', moveLeft);
rightArrowSmall.addEventListener('click', moveRight);

carousel.addEventListener('animationend', (animationEvent) => {

  if (animationEvent.animationName === 'move-left') {
    carousel.classList.remove('transition-left');
    const leftCards = cardsLeft.innerHTML;
    document.querySelector('.cards-active').innerHTML = leftCards;

    cardsLeft.innerHTML = '';

    let cardAdded = createCardTemplate(randomNumArr[0]);
    cardsLeft.appendChild(cardAdded);

    let cardAdded2 = createCardTemplate(randomNumArr[1]);
    cardsLeft.appendChild(cardAdded2);

    let cardAdded3 = createCardTemplate(randomNumArr[2]);
    cardsLeft.appendChild(cardAdded3);

    let cardAdded4 = createCardTemplate(randomNumArr[3]);
    cardsLeft.appendChild(cardAdded4);

    if (window.innerWidth > 980) {
      let cardAdded5 = createCardTemplate(randomNumArr[4]);
      cardsLeft.appendChild(cardAdded5);

      let cardAdded6 = createCardTemplate(randomNumArr[5]);
      cardsLeft.appendChild(cardAdded6);
    }
    clearArr();
  } else {
    carousel.classList.remove('transition-right');
    const rightCards = cardsRight.innerHTML;
    document.querySelector('.cards-active').innerHTML = rightCards;

    cardsRight.innerHTML = '';

    const cardAdded = createCardTemplate(randomNumArr[0]);
    cardsRight.appendChild(cardAdded);

    const cardAdded2 = createCardTemplate(randomNumArr[1]);
    cardsRight.appendChild(cardAdded2);

    const cardAdded3 = createCardTemplate(randomNumArr[2]);
    cardsRight.appendChild(cardAdded3);

    const cardAdded4 = createCardTemplate(randomNumArr[3]);
    cardsRight.appendChild(cardAdded4);

    if (window.innerWidth > 980) {
      const cardAdded5 = createCardTemplate(randomNumArr[4]);
      cardsRight.appendChild(cardAdded5);

      const cardAdded6 = createCardTemplate(randomNumArr[5]);
      cardsRight.appendChild(cardAdded6);
    }
    clearArr();
  }
  leftArrow.addEventListener('click', moveLeft);
  rightArrow.addEventListener('click', moveRight);
  leftArrowSmall.addEventListener('click', moveLeft);
  rightArrowSmall.addEventListener('click', moveRight);
});
