//                                                                      ЗАДАЧА 1/48
// Дополни код так, чтобы в переменной result был результат выполнения функции makePizza, а в переменной pointer была ссылка на функцию makePizza.
function makePizza() {
  return "Your pizza is being prepared, please wait.";
}
// Change code below this line

const result = makePizza();
const pointer = makePizza;

//                                                                      ЗАДАЧА 2/48
// Дополни функцию makeMessage так, чтобы она ожидала вторым параметром (параметр callback) колбэк-функцию и возвращала ее вызов.
// Функция deliverPizza или makePizza будет передаваться как колбэк и ожидать аргументом имя готовой доставляемой пиццы.
function deliverPizza(pizzaName) {
  return `Delivering ${pizzaName} pizza.`;
}

function makePizza(pizzaName) {
  return `Pizza ${pizzaName} is being prepared, please wait...`;
}

// Chande code below this line
function makeMessage(pizzaName, callback) {
  return callback(pizzaName);
}

//                                                                      ЗАДАЧА 3/48
// Дополни второй вызов функции makePizza(pizzaName, callback), передав вторым аргументом инлайн колбэк-функцию eatPizza(pizzaName),
// которая логирует строку "Eating pizza <имя пиццы>".
function makePizza(pizzaName, callback) {
  console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
  callback(pizzaName);
}

makePizza("Royal Grand", function deliverPizza(pizzaName) {
  console.log(`Delivering pizza ${pizzaName}.`);
});
// Change code below this line

makePizza("Ultracheese", function eatPizza(pizzaName) {
console.log(`Eating pizza ${pizzaName}.`);
});

//                                                                      ЗАДАЧА 4/48
// Необходимо написать логику обработки заказа пиццы. Выполни рефакторинг метода order так, чтобы он принимал вторым и третим параметрами два колбэка onSuccess и onError.
// Если в свойстве pizzas нет пиццы с названием из параметра pizzaName, метод order должен возвращать результат вызова колбэка onError,
// передавая ему аргументом строку "There is no pizza with a name <имя пиццы> in the assortment."
// Если в свойстве pizzas есть пицца с названием из параметра pizzaName, метод order должен возвращать результат вызова колбэка onSuccess,
// передавая ему аргументом имя заказанной пиццы.
// После объявления объекта pizzaPalace мы добавили колбэки и вызовы методов. Пожалуйста ничего там не меняй.
const pizzaPalace = {
  pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
  order(pizzaName, onSuccess, onError) {
  return this.pizzas.includes(pizzaName)
      ? makePizza(pizzaName)
      : onOrderError(`There is no pizza with a name ${pizzaName} in the assortment.`);
  },
};
// Change code above this line

// Callback for onSuccess
function makePizza(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

// Callback for onError
function onOrderError(error) {
  return `Error! ${error}`;
}

// Method calls with callbacks
pizzaPalace.order('Smoked', makePizza, onOrderError);
pizzaPalace.order('Four meats', makePizza, onOrderError);
pizzaPalace.order('Big Mike', makePizza, onOrderError);
pizzaPalace.order('Vienna', makePizza, onOrderError);

//                                                                      ЗАДАЧА 5/48
// Функция calculateTotalPrice(orderedItems) принимает один параметр orderedItems - массив чисел, и рассчитывает общую сумму его элементов,
// которая сохраняется в переменной totalPrice и возвращается как результат работы функции.
// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.
function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Change code below this line
  //for (let i = 0; i < orderedItems.length; i += 1) {
  //  totalPrice += orderedItems[i];
 // }
  orderedItems.forEach(function (calculateTotalPrice) {
    totalPrice += calculateTotalPrice})
  // Change code above this line
  return totalPrice;
}

//                                                                      ЗАДАЧА 6/48
// Функция filterArray(numbers, value) принимает массив чисел numbers и возвращает новый массив,
//  в котором будут только те элементы оригинального массива, которые больше чем значение параметра value.
// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.
function filterArray(numbers, value) {
  const filteredNumbers = [];
  // Change code below this line
//  for (let i = 0; i < numbers.length; i += 1) {
//    if (numbers[i] > value) {
//      filteredNumbers.push(numbers[i]);
//    }
//  }
  
//   numbers.forEach(function (number) {
//   if (number > value) {
//   filteredNumbers.push(number);
//   }
//   })
  
  numbers.forEach((number) => {
  if (number > value) {
  filteredNumbers.push(number);
  }
  })

  // Change code above this line
  return filteredNumbers;
}

//                                                                      ЗАДАЧА 7/48
// Функция getCommonElements(firstArray, secondArray) принимает два массива произвольной длины в параметры firstArray и secondArray,
// и возвращает новый массив их общих элементов, то есть тех которые есть в обоих массивах.
// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.
function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  // Change code below this line
 // for (let i = 0; i < firstArray.length; i += 1) {
 //   if (secondArray.includes(firstArray[i])) {
 //     commonElements.push(firstArray[i]);
 //   }
 // }
firstArray.forEach((value) => {
if (secondArray.includes(value)){
commonElements.push(value);
}
})
  return commonElements;
  // Change code above this line
}

//                                                                      ЗАДАЧА 8/48
// Выполни рефакторинг функции calculateTotalPrice() так, чтобы она была объявлена как стрелочная.

// // Change code below this line

// function calculateTotalPrice(quantity, pricePerItem) {
//   // Change code above this line
//   return quantity * pricePerItem;
// }
// Change code below this line

const calculateTotalPrice = (quantity, pricePerItem) => {
  // Change code above this line
  return quantity * pricePerItem;
}

//                                                                      ЗАДАЧА 9/48
// Выполни рефакторинг функции calculateTotalPrice() так, чтобы она использовала неявный возврат.
// Change code below this line
// const calculateTotalPrice = (quantity, pricePerItem) => {
//   return quantity * pricePerItem;
// };
// // Change code above this line

// Change code below this line
const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
// Change code above this line

//                                                                      ЗАДАЧА 10/48
// Выполни рефакторинг функции calculateTotalPrice(orderedItems) заменив её объявление на стрелочную функцию.
// Замени коллбек-функцию передаваемую в метод forEach() на стрелочную функцию.

// // Change code below this line
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function (item) {
//     totalPrice += item;
//   });

//   return totalPrice;
// }
// // Change code above this line

// Change code below this line
const calculateTotalPrice = (orderedItems) => {
  let totalPrice = 0;

  orderedItems.forEach( (item) => {
    totalPrice += item;
  });

  return totalPrice;
}
// Change code above this line

//                                                                      ЗАДАЧА 11/48
// Замени объявление функции filterArray() и коллбек для метода forEach() на стрелочные функции.
// Change code below this line
const filterArray = (numbers, value) => {
  const filteredNumbers = [];

  numbers.forEach((number) => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  // Change code above this line
  return filteredNumbers;
}

//                                                                      ЗАДАЧА 12/48
// Замени объявление функции getCommonElements() и коллбек для метода forEach() на стрелочные функции.
// Change code below this line
const getCommonElements = (firstArray, secondArray) => {
  const commonElements = [];

  firstArray.forEach((element) => {
    if (secondArray.includes(element)) {
      commonElements.push(element);
    }
  });

  // Change code above this line
  return commonElements;
}

//                                                                      ЗАДАЧА 13/48
// Функция changeEven(numbers, value) принимает массив чисел numbers и обновляет каждый элемент, значение которого это чётное число,
// добавляя к нему значение параметра value.
// Выполни рефакторинг функции так, чтобы она стала чистой - не изменяла массив чисел numbers, а создавала, наполняла и возвращала новый массив с обновлёнными значениями.

function changeEven(numbers, value) {
  // Change code below this line
 const newNumbers = [];
  numbers.forEach((number) => {
    number % 2 === 0 
      	? newNumbers.push(number + value) 
    	: newNumbers.push(number);})
  return newNumbers;
  // Change code above this line
}

//                                                                      ЗАДАЧА 14/48
// Дополни код так, чтобы в переменной planetsLengths получился массив длин названий планет. Обязательно используй метод map().
const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// Change code below this line
const planetsLengths = planets.map(planet => planet.length);

//                                                                      ЗАДАЧА 15/48
// Используя метод map() сделай так, чтобы в переменной titles получился массив названий книг (свойство title) из всех объектов массива books.
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];
// Change code below this line

const titles = books.map(books => books.title);

//                                                                      ЗАДАЧА 16/48
// Используя метод flatMap() сделай так, чтобы в переменной genres получился массив всех жанров книг (свойство genres) из массива книг books.
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism"],
  },
];
// Change code below this line

const genres = books.flatMap(books => books.genres);


//                                                                      ЗАДАЧА 17/48
// Дополни функцию getUserNames(users) так, чтобы она возвращала массив имён пользователей (свойство name) из массива объектов в параметре users.
// Change code below this line
const getUserNames = users => {
    
return users.map (users => users.name)
  };
  // Change code above this line

//                                                                      ЗАДАЧА 18/48
// Дополни функцию getUserEmails(users) так, чтобы она возвращала массив почтовых адресов пользователей (свойство email) из массива объектов в параметре users.
// Change code below this line
const getUserEmails = users => {
    return users.map(users => users.email)
  };
  // Change code above this line

//                                                                      ЗАДАЧА 19/48
// Дополни код так, чтобы в переменной evenNumbers получился массив чётных чисел из массива numbers, а в переменной oddNumbers массив нечётных.
// Обязательно используй метод filter().
const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// Change code below this line

const evenNumbers = numbers.filter((numbers) => numbers % 2 === 0);
const oddNumbers = numbers.filter((numbers) => numbers % 2 > 0);

//                                                                      ЗАДАЧА 19/48
// Дополни код так, чтобы в переменной evenNumbers получился массив чётных чисел из массива numbers, а в переменной oddNumbers массив нечётных.
// Обязательно используй метод filter().
const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// Change code below this line
const evenNumbers = numbers.filter((numbers) => numbers % 2 === 0);
const oddNumbers = numbers.filter((numbers) => numbers % 2 > 0);

//                                                                      ЗАДАЧА 20/48
//Дополни код так, чтобы в переменной allGenres был массив всех жанров книг (свойство genres) из массива books,
// а в переменной uniqueGenres массив уникальных жанров - без повторений.
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction", "mysticism"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism", "adventure"],
  },
];
// Change code below this line
const allGenres = books.flatMap(book => book.genres);
const uniqueGenres = allGenres.filter((genres, index, array) => array.indexOf(genres) === index);
console.log(allGenres)

//                                                                      ЗАДАЧА 21/48
// Используя метод filter() дополни код так, чтобы:
// В переменной topRatedBooks получился массив книг рейтинг которых (свойство rating) больше либо равно значению переменной MIN_RATING.
// В переменной booksByAuthor получился массив книг написанных автором с именем (свойство author) которое совпадает со значением в переменной AUTHOR.
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];

const MIN_RATING = 8;
const AUTHOR = "Bernard Cornwell";
// Change code below this line

const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
const booksByAuthor = books.filter(book => book.author === AUTHOR);

//                                                                      ЗАДАЧА 22/48
// Дополни функцию getUsersWithEyeColor(users, color) так, чтобы она возвращала массив пользователей у которых цвет 
// глаз (свойство eyeColor) совпадает со значением параметра color.
// Change code below this line
const getUsersWithEyeColor = (users, color) => {
 return users.filter(user => user.eyeColor === color);
};
// Change code above this line

//                                                                      ЗАДАЧА 23/48
// Дополни функцию getUsersWithAge(users, minAge, maxAge) так, чтобы она возвращала массив пользователей, возраст которых (свойство age) 
// попадает в промежуток от minAge до maxAge.

// Change code below this line
const getUsersWithAge = (users, minAge, maxAge) => {
 return users.filter(user => user.age >= minAge && user.age <= maxAge)
};
// Change code above this line

//                                                                      ЗАДАЧА 24/48
// Дополни функцию getUsersWithFriend(users, friendName) так, чтобы она возвращала массив пользователей у которых есть друг с именем в параметре friendName.
// Массив друзей пользователя хранится в свойстве friends.
// Change code below this line
const getUsersWithFriend = (users, friendName) => {
   return users.filter(user => user.friends.includes(friendName))
};
// Change code above this line

//                                                                      ЗАДАЧА 25/48
// Дополни функцию getFriends(users) так, чтобы она возвращала массив друзей всех пользователей (свойство friends).
// У нескольких пользователей могут быть одинаковые друзья, сделай так чтобы возвращаемый массив не содержал повторений.
// Change code below this line
const getFriends = (users) => {
   return users.flatMap(user => user.friends).filter((friends, index, array) => array.indexOf(friends) === index)
};
// Change code above this line

//                                                                      ЗАДАЧА 26/48
// Дополни функцию getActiveUsers(users) так, чтобы она возвращала массив активных пользователей, значение свойства isActive которых true.
// Change code below this line
const getActiveUsers = (users) => {
   return users.filter(user => user.isActive===true)
};
// Change code above this line

//                                                                      ЗАДАЧА 27/48
// Дополни функцию getInactiveUsers(users) так, чтобы она возвращала массив неактивных пользователей, значение свойства isActive которых false.
// Change code below this line
const getInactiveUsers = (users) => {
   return users.filter(user => user.isActive===false)
};
// Change code above this line

//                                                                      ЗАДАЧА 28/48
// Используя метод find() дополни код так, чтобы:
// В переменной bookWithTitle получился объект книги название которой (свойство title) совпадает со значением переменной BOOK_TITLE.
// В переменной bookByAuthor получился объект книги автор который (свойство author) совпадает со значением переменной AUTHOR.

const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
  },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75,
  },
  { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
];
const BOOK_TITLE = 'The Dream of a Ridiculous Man';
const AUTHOR = 'Robert Sheckley';
// Change code below this line

const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
const bookByAuthor = books.find(book => book.author === AUTHOR);

//                                                                      ЗАДАЧА 29/48
// Дополни функцию getUserWithEmail(users, email) так, чтобы она возвращала объект пользователя, почта которого (свойство email) совпадает со значением параметра email.
// Change code below this line
const getUserWithEmail = (users, email) => {
   return users.find(user => user.email === email)
};
// Change code above this line

//                                                                      ЗАДАЧА 30/48
// Используя метод every() дополни код так, чтобы:
// В переменной eachElementInFirstIsEven был результат проверки всех элементов массива firstArray на чётность.
// В переменной eachElementInFirstIsOdd был результат проверки всех элементов массива firstArray на нечётность.
// В переменной eachElementInSecondIsEven был результат проверки всех элементов массива secondArray на чётность.
// В переменной eachElementInSecondIsOdd был результат проверки всех элементов массива secondArray на нечётность.
// В переменной eachElementInThirdIsEven был результат проверки всех элементов массива thirdArray на чётность.
// В переменной eachElementInThirdIsOdd был результат проверки всех элементов массива thirdArray на нечётность.
const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Change code below this line

const eachElementInFirstIsEven = firstArray.every(value => value % 2 === 0);
const eachElementInFirstIsOdd = firstArray.every(value => value % 2 !== 0);

const eachElementInSecondIsEven = secondArray.every(value => value % 2 === 0);
const eachElementInSecondIsOdd = secondArray.every(value => value % 2 !== 0);

const eachElementInThirdIsEven = thirdArray.every(value => value % 2 === 0);
const eachElementInThirdIsOdd = thirdArray.every(value => value % 2 !== 0);

//                                                                      ЗАДАЧА 31/48
// Дополни функцию isEveryUserActive(users) так, чтобы она проверяла все ли пользователи сейчас активны (свойство isActive) и возвращала true или false.
// Change code below this line
const isEveryUserActive = (users) => {
   return users.every(user => user.isActive === true)
};
// Change code above this line

//                                                                      ЗАДАЧА 32/48
// Используя метод some() дополни код так, чтобы:
// В переменной anyElementInFirstIsEven был результат проверки наличия чётных элементов в массиве firstArray.
// В переменной anyElementInFirstIsOdd был результат проверки наличия нечётных элементов в массиве firstArray.
// В переменной anyElementInSecondIsEven был результат проверки наличия чётных элементов в массиве secondArray.
// В переменной anyElementInSecondIsOdd был результат проверки наличия нечётных элементов в массиве secondArray.
// В переменной anyElementInThirdIsEven был результат проверки наличия чётных элементов в массиве thirdArray.
// В переменной anyElementInThirdIsOdd был результат проверки наличия нечётных элементов в массиве thirdArray.
const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Change below this line

const anyElementInFirstIsEven = firstArray.some(value => value % 2 === 0);
const anyElementInFirstIsOdd = firstArray.some(value => value % 2 !== 0);

const anyElementInSecondIsEven = secondArray.some(value => value % 2 === 0);
const anyElementInSecondIsOdd = secondArray.some(value => value % 2 !== 0);

const anyElementInThirdIsEven = thirdArray.some(value => value % 2 === 0);
const anyElementInThirdIsOdd = thirdArray.some(value => value % 2 !== 0);

//                                                                      ЗАДАЧА 33/48
// Дополни функцию isAnyUserActive(users) так, чтобы она проверяла наличие активных пользователей (свойство isActive) и возвращала true или false.
// Change code below this line
const isAnyUserActive = users => {
   return users.some(user => user.isActive === true)
};
// Change code above this line

//                                                                      ЗАДАЧА 34/48
// Игровому сервису необходим функционал подсчёта среднего времени проведённого в играх. Дополни код так, чтобы в переменной totalPlayTime получилось
// общее игровое время из массива playtimes.
const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]
// Change code below this line

const totalPlayTime = playtimes.reduce((previousValue, number)=> {
  return previousValue + number;
}, 0);

// Change code above this line
const averagePlayTime = totalPlayTime / playtimes.length;

//                                                                      ЗАДАЧА 35/48
// Нашему сервису необходимо рассчитать среднее время проведённое в одной игре для каждого игрока, и получить общую сумму этих времён.
// Рассчитать время для каждого из игроков, можно разделив его время (свойство playtime) на количество игр (свойство gamesPlayed).
const players = [
  { name: "Mango", playtime: 1270, gamesPlayed: 4 },
  { name: "Poly", playtime: 469, gamesPlayed: 2 },
  { name: "Ajax", playtime: 690, gamesPlayed: 3 },
  { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];
// Change code below this line

const totalAveragePlaytimePerGame = players.reduce((total, player) => {
return total + player.playtime / player.gamesPlayed}, 0);

//                                                                      ЗАДАЧА 36/48
// Дополни функцию calculateTotalBalance(users) так, чтобы она считала и возвращала сумму всех средств (свойство balance) которые хранят пользователи из массива users.
// Change code below this line
const calculateTotalBalance = users => {
  return users.reduce ((acc, total) => acc + total.balance, 0)
};
// Change code above this line






//                                                                      ЗАДАЧА 40/48
// Онлайн бибилиотеке необходимо отображать книги отсортированные по автору, в алфавитном и обратном алфавитном порядке. Дополни код так,
// чтобы в переменной authorsInAlphabetOrder получилась отсортированная по алфавиту копия массива authors, а в переменной authorsInReversedOrder
// копия отсортированная в обратном алфавитном порядке.
const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
  "Howard Lovecraft",
];
// Change code below this line

const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));

const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

//                                                                      ЗАДАЧА 41/48
// Дополни код так, чтобы:
// В переменной sortedByAuthorName получился массив книг отсортированный по имени автора в алфавитном порядке.
// В переменной sortedByReversedAuthorName получился массив книг отсортированный по имени автора в обратном алфавитном порядке.
// В переменной sortedByAscendingRating получился массив книг отсортированный по возрастанию рейтинга.
// В переменной sortedByDescentingRating получился массив книг отсортированный по убыванию рейтинга.
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];
// Change code below this line

const sortedByAuthorName = [...books].sort((firstBook, secondBook) =>
  firstBook.author.localeCompare(secondBook.author)
);

const sortedByReversedAuthorName = [...books].sort((firstBook, secondBook) =>
  secondBook.author.localeCompare(firstBook.author)
);

const sortedByAscendingRating = [...books].sort((firstBook, secondBook) =>
  firstBook.rating - secondBook.rating
);

const sortedByDescentingRating = [...books].sort((firstBook, secondBook) =>
  secondBook.rating - firstBook.rating
);

//                                                                      ЗАДАЧА 42/48
// Дополни функцию sortByAscendingBalance(users) так, чтобы она возвращала массив пользователей отсортированный по возрастанию их баланса (свойство balance).
// Change code below this line
const sortByAscendingBalance = users => {
  return [...users].sort((firstUser, secondUser) => firstUser.balance - secondUser.balance)
};
// Change code above this line

//                                                                      ЗАДАЧА 43/48
// Дополни функцию sortByDescendingFriendCount(users) так, чтобы она возвращала массив пользователей отсортированный по убыванию количества их друзей (свойство friends).
// Change code below this line
const sortByDescendingFriendCount = users => {
   return [...users].sort((firstUser, secondUser) => secondUser.friends.length - firstUser.friends.length)
};
// Change code above this line

//                                                                      ЗАДАЧА 44/48
// Дополни функцию sortByName(users) так, чтобы она возвращала массив пользователей отсортированный по их имени (свойство name) в алфавитном порядке.
// Change code below this line
const sortByName = users => {
  return [...users].sort((firstUser, secondUser) => firstUser.name.localeCompare(secondUser.name)); 
};
// Change code above this line

//                                                                      ЗАДАЧА 45/48
// Дополни код так, чтобы в переменной names получился массив имён авторов в алфавитном порядке, рейтинг книг которых больше значения переменной MIN_BOOK_RATING.
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  {
    title: "The Dreams in the Witch House",
    author: "Howard Lovecraft",
    rating: 8.67,
  },
];
const MIN_BOOK_RATING = 8;
// Change code below this line

const names = [...books]
.filter(book => book.rating > MIN_BOOK_RATING)
.map(book => book.author)
.sort((firstAuthor, secondAuthor) => firstAuthor.localeCompare(secondAuthor));
console.log(names)


//                                                                      ЗАДАЧА 46/48
// Дополни функцию getNamesSortedByFriendCount(users) так, чтобы она возвращала массив имён пользователей отсортированный по возрастанию количества их друзей (свойство friends).
// Change code below this line
const getNamesSortedByFriendCount = users => {
   return [...users]
   .sort((firstUser, secondUser) => firstUser.friends.length - secondUser.friends.length)
   .map(user => user.name)
};
// Change code above this line

//                                                                      ЗАДАЧА 47/48
// Дополни функцию getSortedFriends(users) так, чтобы она возвращала массив уникальных имён друзей (свойство friends) отсортированный по алфавиту .

// Change code below this line
const getSortedFriends = users => {
   return [...users]
   .flatMap(user => user.friends)
   .filter((friend, index, array) => array.indexOf(friend) === index)
   .sort((a, b) => a.localeCompare(b))
};
// Change code above this line

//                                                                      ЗАДАЧА 48/48
// Дополни функцию getTotalBalanceByGender(users, gender) так, чтобы она возвращала общий баланс пользователей (свойство balance), пол которых (свойство gender)
// совпадает со значением параметра gender.
// Change code below this line
const getTotalBalanceByGender = (users, gender) => {
   return [...users]
   .filter(user => user.gender === gender)
   .reduce ((acc, total) => acc + total.balance, 0)
};
// Change code above this line
