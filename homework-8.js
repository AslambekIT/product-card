// Я импортирую массив продуктов из отдельного файла products.js.
// Это позволяет разделить данные и логику приложения.

import { products } from "./products.js";


// Я получаю доступ к шаблону карточки и контейнеру,
// в который будут вставляться готовые карточки.

const productTemplate = document.getElementById("product-template");
const productList = document.getElementById("product-list");


// Я создаю функцию renderProducts,
// которая принимает массив продуктов
// и рендерит их на страницу.

function renderProducts(productsToRender) {
  // Перед рендером я очищаю контейнер,
  // чтобы избежать дублирования карточек.
  productList.innerHTML = "";

  productsToRender.forEach((product) => {

    // Я клонирую содержимое template для каждой карточки.
    const productClone = productTemplate.content.cloneNode(true);

    // Я заполняю данные карточки значениями из объекта продукта.
    // ПРАВКА: убрано лишнее .png, так как оно уже есть в данных (products.js)
    productClone.querySelector(".product-img").src =
      `images/${product.img}`;

    productClone.querySelector(".product-category").textContent =
      product.skinType;

    productClone.querySelector(".product-name").textContent =
      product.name;

    productClone.querySelector(".product-description").textContent =
      product.description;

    // Я формирую список ингредиентов динамически.
    const compoundList = productClone.querySelector(".product-compound");

    product.ingredients.forEach((item) => {
      const li = document.createElement("li");
      li.className = "product-compound-item";
      li.textContent = item;
      compoundList.appendChild(li);
    });

    // Я устанавливаю цену продукта.
    productClone.querySelector(".product-price").textContent =
      `${product.price} ₽`;

    // После заполнения я добавляю карточку в контейнер.
    productList.appendChild(productClone);
  });
}


// Используя метод reduce(), я создаю объект,
// где ключом является название продукта,
// а значением — его описание.
// Я вывожу полученный объект в консоль для проверки результата.

const productDescriptions = products.reduce((acc, product) => {
  acc[product.name] = product.description;
  return acc;
}, {});

console.log(productDescriptions);


// Я создаю функцию getCardQuantity,
// которая запрашивает у пользователя количество карточек
// для отображения и проверяет корректность ввода.
// Я проверяю, входит ли число в допустимый диапазон.
// Если ввод некорректный, я уведомляю пользователя.

function getCardQuantity() {
  const input = prompt("Сколько карточек отобразить? От 1 до 5");
  const quantity = Number(input);

  if (quantity >= 1 && quantity <= 5) {
    return quantity;
  }

  alert("Введите число от 1 до 5");
  return 0;
}


// После полной загрузки DOM я:
// 1. Получаю количество карточек
// 2. Ограничиваю массив методом slice()
// 3. Передаю его в функцию рендера

document.addEventListener("DOMContentLoaded", () => {
  const count = getCardQuantity();

  if (!count) return;

  renderProducts(products.slice(0, count));
});