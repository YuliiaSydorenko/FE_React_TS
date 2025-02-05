const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNumbers = numbers.map((value, index, array) => {
//   // console.log("1 argument: ", value);
//   // console.log("2 argument: ", index);
//   // console.log("3 argument: ", array);

//   return value * 2;
// });

// console.log(newNumbers);

// /const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filteredArray = numbers.map((value) => {
  if (value <= 5) {
    return value;
  }
});

// const filteredArray = numbers.filter((value) => {
//   return value <= 5;
// });

console.log(filteredArray);
