// Confirms
// const arr4 = [confirm("Whats up?")];
// console.log(arr4);

// Prompts
// let answers = [];
// let name = prompt("Як вас звати?");
// answers.push(name);
// console.log(answers);

// Item access
// let arr = [1, 2, 3, 4, 5];
// let index = prompt("Введіть індекс у масиві:");
// if (index === "length") {
//   console.log(arr.length);
// } else if (index >= 0 && index < arr.length) {
//   console.log(arr[index]);
// } else {
//   console.log("Некоректний індекс.");
// }

// Item change
// let arr = [];
// let index = prompt("Введіть індекс у масиві:");
// let value = prompt("Введіть значення для цього індексу:");
// arr[index] = value;
// console.log(Масив зі зміненим значенням: ${arr});

// IndexOf Word
// let inputString = prompt("Введіть рядок із кількох слів:");
// let inputWord = prompt("Введіть слово, яке потрібно знайти:");
// let wordsArray = inputString.split(" ");
// let wordIndex = wordsArray.indexOf(inputWord);
// if (wordIndex === -1) {
//   console.log("Слово не знайдено в рядку.");
// } else {
//   console.log(Слово "${inputWord}" знаходиться на позиції ${wordIndex + 1} у рядку.);
// }


// Reverse
// const arr = [];
// for (let i = 0; i < 5; i++) {
//   const element = prompt('Введіть елемент масиву:');
//   arr.push(element);
// }
// const reversedArr = [];
// for (let i = 0; arr.length > 0; i++) {
//   const element = arr.pop();
//   reversedArr.push(element);
// }
// console.log('Масив arr:', arr);
// console.log('Масив reversedArr:', reversedArr);

// Multiply table slice
// const multiplicationTable = [];
// for (let i = 1; i <= 5; i++) {
//   const row = [];
//   for (let j = 1; j <= 5; j++) {
//     const product = i * j;
//     if (product !== 0) {
//       row.push(product);
//     }
//   }
//   multiplicationTable.push(row);
// }
// console.log(multiplicationTable);

// Array Equals
// const arr = [1,2,3]
// const arr2 = arr
// arr2 === arr

// Destruct
// const str = prompt('Write smth:');
// const [first, , , , fifth, , , , ninth] = str;
// console.log(Перша літера: ${first});
// console.log(П'ята літера: ${fifth});
// console.log(Дев'ята літера: ${ninth});

// Destruct default
// const str = prompt('Введіть рядок:');
// const [ , second = '!', , fourth = '!', fifth = '!'] = str;
// console.log(Друга літера: ${second});
// console.log(Четверта літера: ${fourth});
// console.log(П'ята літера: ${fifth});


// For Alert
// const names = ["John", "Paul", "George", "Ringo"];
// for (const name of names) {
//      alert(Hello, ${name})
// }


// Multiply table 
// const table = [
//   [0, 0, 0, 0, 0],
//   [0, 1, 2, 3, 4],
//   [0, 2, 4, 6, 8],
//   [0, 3, 6, 9, 12],
//   [0, 4, 8, 12, 16],
// ];
// console.log(table[2][3]);

// Copy
// const copy = [... table];
// console.log(copy);

// Deep Copy
// const deepCopy = table.slice();
// console.log(deepCopy);