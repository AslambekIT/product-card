// Реализована функция, которая выводит текущую температуру
// для указанного населённого пункта в консоль

function showLocationWeather(location, temp) {
  console.log(`Сейчас в ${location} температура ${temp}\u00B0C`);
}

showLocationWeather("Гудермес", "+12");

// Добавлен альтернативный вариант реализации
// с использованием стрелочной функции

const displayWeather = (location, temp) =>
  console.log(`Сейчас в ${location} температура ${temp}\u00B0C`);
displayWeather("Атаги", "+9");


// Объявлена константа, содержащая значение скорости звука.
// Реализована функция, которая принимает скорость и сравнивает её
// со скоростью звука, определяя, является ли она дозвуковой,
// сверхзвуковой или равной скорости звука

const SPEED_OF_SOUND = 343;

function showSpeed(speed) {
  if (speed > SPEED_OF_SOUND) {
    console.log("Сверхзвуковая скорость");
  } else if (speed < SPEED_OF_SOUND) {
    console.log("Дозвуковая скорость");
  } else {
    console.log("Скорость звука");
  }
}


// Описаны переменные, содержащие предмет и его стоимость.
// Реализована проверка возможности покупки
// в зависимости от текущего баланса

const product = "Чайник";
const cost = 1999;
const balance = 2700;

const purchaseProduct =
  balance >= cost
    ? `${product} куплен. Спасибо за покупку!`
    : `Недостаточно средств. Не хватает ${cost - balance} рублей`;

console.log(purchaseProduct);


// Реализована функция для определения состояния контейнера
// на основе количества элементов внутри

function showContainerStatus(items) {
  if (items > 0 && items < 30) {
    console.log("Контейнер заполнен частично");
  } else if (items === 0) {
    console.log("Контейнер пуст");
  } else if (items === 30) {
    console.log("Контейнер полностью заполнен");
  } else {
    console.log("Ошибка. Проверьте данные");
  }
}


// Объявлены три произвольные переменные
// для демонстрации работы с разными типами данных

const FREEFALL_SPEED = 9.8;
const currentMode = "standby";
const isDeviceActive = false;