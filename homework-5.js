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

const REFERENCE_WIND_SPEED = 343;

function checkWindSpeed(speed) {
  if (speed > REFERENCE_WIND_SPEED) {
    console.log("Скорость выше нормы");
  } else if (speed < REFERENCE_WIND_SPEED) {
    console.log("Скорость ниже нормы");
  } else {
    console.log("Нормальная скорость");
  }
}


// Описаны переменные, содержащие предмет и его стоимость.
// Реализована проверка возможности покупки
// в зависимости от текущего баланса

const item = "Чайник";
const cost = 1999;
const balance = 2700;

const purchaseStatus =
  balance >= cost
    ? `${item} куплен. Спасибо за покупку!`
    : `Недостаточно средств. Не хватает ${cost - balance} рублей`;

console.log(purchaseStatus);


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

const MAX_TEMPERATURE = 120;
const currentMode = "standby";
const isDeviceActive = false;