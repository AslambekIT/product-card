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

// Используя метод reduce(), я создаю массив объектов
const productDescriptions = products.reduce((acc, product) => {
  acc.push({ [product.name]: product.description });
  return acc;
}, []);

console.log(productDescriptions);

function getCardQuantity() {
  const input = prompt("Сколько карточек отобразить? От 1 до 5");

  if (input === null) {
    return 5; 
  }

  const quantity = Number(input);

  if (quantity >= 1 && quantity <= 5) {
    return quantity;
  }

  alert("Введите число от 1 до 5");
  return getCardQuantity(); 
}

document.addEventListener("DOMContentLoaded", () => {
  const count = getCardQuantity();
  
  renderProducts(products.slice(0, count));
});