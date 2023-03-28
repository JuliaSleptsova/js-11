// Temperature
function temperature(item, elem) {
  let result;
  if (elem === 'Fahrenheit') {
    result = (item * 9/5) + 32;
  } else if (elem === 'Celsius') {
    result = (item - 32) * 5/9;
  }
  return result;
}
console.log(temperature(25, 'Fahrenheit'));
console.log(temperature(77, 'Celsius'));

// RGB
const red = prompt('Enter number for red');
const green = prompt('Enter number for green');
const blue = prompt('Enter number for blue');
const color = rgb(red, green, blue);
function rgb(r, g, b) {
  const hexR = r.toString(16).padStart(2, '0');
  const hexG = g.toString(16).padStart(2, '0');
  const hexB = b.toString(16).padStart(2, '0');
  return #${hexR}${hexG}${hexB};
}
console.log(color);


// Credentials 
function getFullName() {
  const name = prompt("Введіть ім'я:");
  const surname = prompt("Введіть прізвище:");
  const fatherName = prompt("Введіть по-батькові:");
  const capitalizedFullName = ${name.trim().capitalize()} ${surname.trim().capitalize()} ${fatherName.trim().capitalize()};
  const fullName = ${name.trim()} ${surname.trim()} ${fatherName.trim()};
  return { name, surname, fatherName, fullName};
}
const user = getFullName();
console.log(user.capitalizedFullName);

// New line
function newLine(){
const inputString = prompt('Введіть рядок:');
const fullString = inputString.split('\\n').join('\n');
alert(fullString);
}
newLine();

// Prompt OR
const promptOr = () => {
    let age = prompt("enter your age:");
if (!age ||  isNaN(age)) {
    alert("please enter your age");
} else {
    age = Number(age);
alert("thx");
}
}
const prompt = promptOr();

// Login and password
function loginAndPassword(login,password) {
    let enterLogin = prompt("Введіть логін:", "");
if (enterLogin === "admin") {
  let enterPassword = prompt("Введіть пароль:", "");

  if (enterPassword === "qwerty") {
    alert("Ви успішно увійшли у систему!");
  } else {
    alert("Помилка: невірний пароль!");
  }
} else {
  alert("Помилка: невірний логін!");
}
}
const result =loginAndPassword();

// Filter Lexics
const badWords = ['бляха', 'муха', 'пляшка', 'шабля'];
const str = prompt('Введіть рядок:');
const filteredString = goodWords(str, badWords);
function goodWords(str, badWords) {
  const words = str.split(' ');
  const goodWords = words.filter(word => !badWords.includes(word));
  return goodWords.join(' ');
}
console.log(filteredString);

// Flats
function flat() {
  const floors = parseInt(prompt("Введіть кількість поверхів у будинку:"));
  const flatsPerFloor = parseInt(prompt("Введіть кількість квартир на поверсі:"));
  const flatNumber = parseInt(prompt("Введіть номер квартири:"));
  const floor = Math.ceil(flatNumber / flatsPerFloor);
  const entrance = Math.ceil(floor / (floors));
 
  return `${flatNumber} квартира ${entrance} під'їзд ${floor} поверх`;
}
flat();

// Array of objects sort
const persons = [
    {name: "Іван", age: 17},
    {name: "Марія", age: 35},
    {name: "Олексій", age: 73},
    {name: "Яків", age: 12},
]
const sortPersonsByAge = persons.sort(function(a,b){
    return a.age - b.age;
});
console.log(sortPersonsByAge);

const sortPersonsByName = persons.sort(function (a, b) {
     if (a.length < b.length) {
    return -1;
  } else if (a.length > b.length) {
    return 1;
  }
});
console.log(sortPersonsByName);

// Calc Func не зрозуміла шо тут нада робити
const arr = [
  {name: "Іван", age: 17},
    {name: "Марія", age: 35},
    {name: "Олексій", age: 73},
    {name: "Яків", age: 12}
];
const averageAge = arr.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.age;
}, 0);
console.log(averageAge / arr.length);

// for Table
const arr = [
  [0, 0, 0, 0, 0],
  [0, 1, 2, 3, 4],
  [0, 2, 4, 6, 8],
  [0, 3, 6, 9, 12],
  [0, 4, 8, 12, 16],
];
function table(array) {
  let str = `<table style = "width: 120px">`;
  for (let i of array) {
    str += `<tr>`;
    for (let j of i) {
      if (arr.indexOf(i) === 0) {
        str += `<th style = "background: white">${j}</th>`;
      } else if (j % 2 === 0 && j > 0) {
        str += `<td style = "background: yellow">${j}</td>`;
      } else {
        str += `<td style = "background: blue">${j}</td>`;
      }
    }
    str += `</tr>`;
  }
  str += "</table>";
  return document.write(str);
}
table(arr);