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
    if(number % 2 === 0){
   newNumbers.push(number + value)
    } else {
    newNumbers.push(number)
    }
  });
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
