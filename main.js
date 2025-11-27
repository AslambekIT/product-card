//Покраска всех карточек

const productCards = document.querySelectorAll('.card-container');
const AllCardColorSwitchBtn = document.querySelector('#all-card-color-switch-btn');

const colorHashBg = '#dcdce8ff'
const colorHash = '#acacceff'


AllCardColorSwitchBtn.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = colorHashBg)

})

//Покраска первой карточки

const productCard = document.querySelector('.card-container');
const cardColorSwitchBtn = document.querySelector('#card-color-switch-btn');

cardColorSwitchBtn.addEventListener('click', () => {
  productCard.style.backgroundColor = colorHash

})

// Открыть страницу гугл

const openPageGoogleBtn = document.querySelector('#open-page-google-btn');
openPageGoogleBtn.addEventListener('click', openGoogle)

function openGoogle() {
  const answer = confirm('Вы действительно хотите открыть Google?');

  if (answer === true) {
    window.open('https://google.com')
  } else {
    return;
  }
}

// Вывод консоль лог

const outputLogBtn = document.querySelector('#output-log-btn');

outputLogBtn.addEventListener('click', () => outputConsolLog('ДЗ №4'))

function outputConsolLog(mesage) {
  alert(mesage)
  console.log(mesage)
}

// Задание 6

const headline = document.querySelector('.headline');
headline.addEventListener('mouseover', () => {
  console.log(headline.textContent);
});

// Задание 7

const changeColorBtn = document.querySelector('#change-color-btn');

changeColorBtn.classList.add('colorLight');

changeColorBtn.colorLight = '#e8e8e8da';
changeColorBtn.colorDark = '#7d7db0ff';


changeColorBtn.style.backgroundColor = changeColorBtn.colorLight;

changeColorBtn.addEventListener('click', () => {
  if (changeColorBtn.classList.contains('colorLight')) {
    changeColorBtn.classList.remove('colorLight');
    changeColorBtn.classList.add('colorDark');
    changeColorBtn.style.backgroundColor = changeColorBtn.colorDark;
  } else {
    changeColorBtn.classList.remove('colorDark');
    changeColorBtn.classList.add('colorLight');
    changeColorBtn.style.backgroundColor = changeColorBtn.colorLight;
  }
});