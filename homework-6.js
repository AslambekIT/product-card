// 3. Создал объект с данными пользователя
// Имя, фамилия, почта, профессия, должность, возраст, страна, город, семейный статус и т.д.

const userProfile = {
  firstName: "Aslambek",
  lastName: "Shatiger",
  email: "aslambek.shatiger@gmail.com",
  profession: "Angular Developer",
  position: "Frontend Engineer",
  age: 25,
  country: "Chechnya",
  city: "Grozny",
  isMarried: false,
};

// 4. Создал объект автомобиля и добавил владельца отдельной строкой
// (марка, модель, год выпуска, цвет, тип коробки передач)

const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020,
  color: "black",
  transmission: "automatic",
};

car.owner = userProfile;
console.log(car);

// 5. Написал функцию, которая проверяет наличие свойства maxSpeed у автомобиля.
// Если свойства нет — добавляет его со значением 210.
// Если свойство уже есть — функция ничего не делает.

function addMaxSpeedIfMissing(carObject) {
  if (!carObject.hasOwnProperty("maxSpeed")) {
    carObject.maxSpeed = 210;
  }
}

addMaxSpeedIfMissing(car);
console.log(car);

// 6. Написал функцию для вывода значения свойства объекта

function showObjectProperty(object, propertyName) {
  console.log(object[propertyName]);
}

showObjectProperty(car, "brand");
showObjectProperty(car, "year");

// 7. Создал массив с названиями продуктов

const products = ["Milk", "Bread", "Cheese", "Apples", "Rice"];
console.log(products);

// 8. Создал массив объектов, где каждый объект представляет книгу,
// и добавил ещё одну книгу в конец массива

const books = [
  {
    title: "The Clean Coder",
    author: "Robert C. Martin",
    releaseYear: 2011,
    coverColor: "white",
    genre: "Programming",
  },
  {
    title: "You Don’t Know JS",
    author: "Kyle Simpson",
    releaseYear: 2015,
    coverColor: "yellow",
    genre: "Programming",
  },
  {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    releaseYear: 2018,
    coverColor: "green",
    genre: "Programming",
  },
];

books.push({
  title: "JavaScript: The Good Parts",
  author: "Douglas Crockford",
  releaseYear: 2008,
  coverColor: "gray",
  genre: "Programming",
});

console.log(books);

// 9. Создал ещё один массив книг из одной вселенной
// и объединил оба массива в один

const fantasyBooks = [
  {
    title: "The Fellowship of the Ring",
    author: "J.R.R. Tolkien",
    releaseYear: 1954,
    coverColor: "dark green",
    genre: "Fantasy",
  },
  {
    title: "The Two Towers",
    author: "J.R.R. Tolkien",
    releaseYear: 1954,
    coverColor: "dark red",
    genre: "Fantasy",
  },
];

const allBooks = [...books, ...fantasyBooks];
console.log(allBooks);

// 10. Использовал метод map и добавил новое свойство isModern
// Книга считается современной, если выпущена после 2010 года

function getModernBooks(bookList) {
  return bookList.map(book => ({
    ...book,
    isModern: book.releaseYear > 2010,
  }));
}

console.log(getModernBooks(allBooks));