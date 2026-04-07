// Импортирую массив продуктов из отдельного файла products.js.
// Это позволяет разделить данные и логику приложения.

import { products } from "./products.js";


// Получаю доступ к шаблону карточки и контейнеру,
// в который будут вставляться готовые карточки.

const productTemplate = document.getElementById("product-template");
const productList = document.getElementById("product-list");


// Создаю функцию renderProducts,
// которая принимает массив продуктов
// и рендерит их на страницу.

function renderProducts(productsToRender) {

  productList.innerHTML = "";

  productsToRender.forEach((product) => {

    const productClone = productTemplate.content.cloneNode(true);

    productClone.querySelector(".product-img").src =
      `images/${product.img}.png`;

    productClone.querySelector(".product-category").textContent =
      product.skinType;

    productClone.querySelector(".product-name").textContent =
      product.name;

    productClone.querySelector(".product-description").textContent =
      product.description;

    // Формирую список ингредиентов динамически.
    const compoundList = productClone.querySelector(".product-compound");

    product.ingredients.forEach((item) => {
      const li = document.createElement("li");
      li.className = "product-compound-item";
      li.textContent = item;
      compoundList.appendChild(li);
    });

    // Устанавливаю цену продукта.
    productClone.querySelector(".product-price").textContent =
      `${product.price} ₽`;

    // После заполнения я добавляю карточку в контейнер.
    productList.appendChild(productClone);
  });
}

// Используя метод reduce(), я создаю МАССИВ объектов,
// где ключом является название продукта,
// а значением — его описание.
// Я вывожу полученный массив в консоль для проверки результата.

const productDescriptions = products.reduce((acc, product) => {
  acc.push({ [product.name]: product.description });
  return acc;
}, []);

console.log(productDescriptions);

// Создаю функцию getCardQuantity,
// которая запрашивает у пользователя количество карточек
// для отображения и проверяет корректность ввода.
// Проверяю, входит ли число в допустимый диапазон. Добавил рекурсию.

function getCardQuantity() {
  const input = prompt("Сколько карточек отобразить? От 1 до 5");
  const quantity = Number(input);

  if (quantity >= 1 && quantity <= 5) {
    return quantity;
  }

  alert("Введите число от 1 до 5");
  return getCardQuantity(); 
}

// После полной загрузки DOM я:
// 1. Получаю количество карточек
// 2. Ограничиваю массив методом slice()
// 3. Передаю его в функцию рендера

document.addEventListener("DOMContentLoaded", () => {
  const count = getCardQuantity();

  // Если получили число, рендерим карточки
  if (count > 0) {
    renderProducts(products.slice(0, count));
  }
});