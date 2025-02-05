 // Задача 1
// У вас есть объект с данными о машине.
// Используйте деструктуризацию, чтобы извлечь марку и модель в отдельные переменные  {
//  brand: 'Toyota',
//  model: 'Corolla',
//  year: 2020,
//  color: 'red'
//  };

// Задача 2
// У вас есть массив чисел. Верните только те числа, которые больше 10.
// const numbers = [5, 12, 8, 20, 15, 3];

// Задача 3
// Умножьте все элементы массива на 2.
// const numbersAr = [1, 2, 3, 4, 5];

// Задача 4
//Необходимо скопировать массив в другую переменную
// const fruits = ["apple", "orange", "bannana", "kiwi"];

// Задача 5
// Создайте новый массив, в который будут входить только значения имен [
//     { name: "John", age: 20 },
//     { name: "Tom", age: 22 },
//     { name: "Bob", age: 21 },
//   ];

// Задача 6
// Необходимо получить новый массив, в котором будет отсутствовать выбранный элемент
// const arrayExample1 = [
//     '1e4e2e4c-056e-4f1d-9463-7b8b19a8cf33',
//     '9b7e4f3e-bd7f-4c6c-8f69-3c63b013faba',
//     'c0e1f8b2-1d0f-4f5b-86e5-bc4e5f8c8b7e',
//     'd1f6c0a3-8b9e-4c5a-9147-b6f7d9f6a5d4',
//     'e3a9b7d1-4f8b-41a9-a3f1-1e6a9d1c3b2e',
//     'f4b1c8d2-5c7a-42e9-9d7b-4c6a5f8e9b7c'
//   ];

//  const element = 'd1f6c0a3-8b9e-4c5a-9147-b6f7d9f6a5d4'

// Задача 7
//  У вас есть массив animals = ["cat", "dog", "rabbit"].
//  Создайте новый массив, который будет включать в себя:
//  все элементы из animals,
//  "tiger" и "elephant" в конец.
//  Убедитесь, что исходный массив animals остался неизменным.

// Задача 1
// У вас есть объект с данными о машине.
// Используйте деструктуризацию, чтобы извлечь марку и модель в отдельные переменные  {
//  brand: 'Toyota',
//  model: 'Corolla',
//  year: 2020,
//  color: 'red'
//  };
let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    color: "red",
  };
  // let brand = car.brand;
  // let model = car.model;
  //деструктуризация объекта
  //rest-оператор
  const { brand, model, ...restfOfCar } = car;
  console.log(brand);
  console.log(model);
  // let restfOfCar = {
  //     year: car.year,
  //     color: car.color,
  // }
  console.log(restfOfCar);
  
  //////////////////////////////////////
  // Задача 2
  // У вас есть массив чисел. Верните только те числа, которые больше 10.
  let numbers = [5, 12, 8, 20, 15, 3];
  const filteredArray = numbers.filter((value) => {
    return value > 10;
  });
  console.log(filteredArray);
  
  //////////////////////////
  const users = [
    { name: "John", age: 20 },
    { name: "Tom", age: 22 },
    { name: "Bob", age: 21 },
  ];
  const namesOfUsers = users.map((item) => {
    return item.name;
  });
  console.log(namesOfUsers);
  