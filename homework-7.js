import { comments } from "./comments.js";

// Создал массив чисел от 1 до 10 и отфильтровал его так,
// чтобы остались числа начиная с 5.

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNumbersArray = numbersArray.filter((number) => number >= 5);

console.log(newNumbersArray);

// Сформировал массив строк (кухонные приборы) и проверил,
// содержится ли в нём конкретный элемент.

const kitchenItemsArray = [
  "Сковорода",
  "Миксер",
  "Блендер",
  "Тостер",
  "Духовка",
  "Хлеборезка"
];

const hasBlender = kitchenItemsArray.includes("Блендер");

console.log(hasBlender);

// Реализовал функцию для переворота массива и использовал её
// для двух созданных выше массивов.

function getReversedArray(array) {
  return array.reverse();
}

console.log(getReversedArray(numbersArray));
console.log(getReversedArray(kitchenItemsArray));


// В comments.js поместил первые 10 объектов массива комментариев
// и экспортировал их под соответствующим именем.


// Вывел в консоль комментарии, email которых содержат ".com".

const filteredComComments = comments.filter(comment =>
  comment.email.includes(".com"),
);

console.log(filteredComComments);


// Преобразовал массив так, чтобы у комментариев с id ≤ 5 был postId: 2,
// а у остальных — postId: 1.

const idComments = comments.map(comment => {
  if (comment.id <= 5) {
    comment.postId = 2;
  } else {
    comment.postId = 1;
  }
  return comment;
});

console.log(idComments);


// Создал новый массив, содержащий только id и name.

const shortCommentProfile = comments.map(({ id, name }) => ({ id, name }));

console.log(shortCommentProfile);


// Добавил объектам свойство isInvalid, которое устанавливается в true,
// если длина body превышает 180 символов, иначе — false.

const markedLongComments = comments.map(comment => ({
  ...comment,
  isInvalid: comment.body.length > 180,
}));

console.log(markedLongComments);


// С помощью reduce сформировал массив email,
// затем сделал аналогично через map.

const emailsOnlyArrayReduce = comments.reduce((emails, comment) => {
  emails.push(comment.email);
  return emails;
}, []);

console.log(emailsOnlyArrayReduce);

const emailsOnlyArrayMap = comments.map(comment => comment.email);

console.log(emailsOnlyArrayMap);


// Преобразовал массив email в строку с разделителем ", ".

const emails = emailsOnlyArrayMap.join(", ");

console.log(emails);
