// Homework 06
// Задание
// Протипизировать следующие данные в соответствии с изученными правилами



// 1. Типизация чисел - number
let age: number = 25;

// 2. Типизация строк - string
let name: string = "Alice";

// 3. Типизация логического типа - boolean
let isActive: boolean = true;

// 4. Типизация null - строка или null
let nullableValue: string | null = null;

// 5. Типизация массива чисел - number[]
let numbers: number[] = [1, 2, 3, 4];

// 6. Типизация массива строк - string[]
let names: string[] = ["Alice", "Bob", "Charlie"];

// 7. Union типы - массив, содержащий числа и строки
let mixed: (number | string)[] = [1, "Alice", 2, "Bob"];

// 8. Union типы - массив, содержащий числа, строки и логические значения
let colors: (number | string | boolean)[] = [123, "red", true, "blue"];

// 9. Типизация параметров функции и возвращаемого значения - number
const add = (a: number, b: number): number => {
  return a - b;
};

// 10. Типизация параметров функции и возвращаемого значения - void
const logMessage = (message: string): void => {
  console.log(message);
};
