// while confirm
let i = 0
while (confirm('Хоч ще?')) {
     alert('Без б')
     i++
}
alert(`Ти витримав ${ i } разів`);

// array fill
let arr = [];
let arr1;
while (arr1 = prompt('Enter smth pls')) {
  if (arr1 === null) {
    break;
  }
  arr.push(arr1);
}
console.log(arr);

// array fill nopush
let arr = [];
let arr1;
let i = 0;
while (arr1 !== null) {
  arr1 = prompt('Enter smth pls');
  if (arr1 !== null) {
    arr[i] = arr1;
    i++;
  }
}
console.log(arr);

// infinite probability
let i = 0;
while (true) {
  i++;
  if (Math.random() > 0.9) {
    break;
  }
}
alert(`Кількість ітерацій: ${i}`);

// empty loop
while (true) {
    const str = prompt('Whats up?');
if (str === null) {
    const str = prompt('Я не відстану');
    continue;
}
  alert(':(');
  break;
}

// progression sum
let N = prompt("Введіть N:");
let sum = 0;
for (let i = 1; i <= N; i += 3) {
  sum += i;
}
alert(Сума: ${sum});

// chess one line
const length = prompt("enter line length");
let line = '';
for (let i = 1; i <= length; i++) {
  if (i % 2 !== 0) {
    line += '#';
  } else {
    line += ' . ';
  }
}
console.log(line);

// numbers
let str = "";
for(let i = 0; i < 10; i++) {
  for(let j = 0; j < 10; j++) {
    str += j;
  }
  str += "\n";
}
console.log(str);

// chess
const length = prompt("enter line length");
let line = "";
for (let row = 0; row < length; row++) {
  for (let col = 0; col < length; col++) {
    if ((row + col) % 2 === 0) {
      line += ".";
    } else {
      line += "#";
    }
  }
  line += "\n";
}
console.log(line);

// cubes
let n = parseInt(prompt("Enter number:"));
let arr = [];
for (let i = 0; i < n; i++) {
  arr.push(Math.pow(n, 3));
}
console.log(arr);

// multiply table
let size = 10;
let table = [];
for (let i = 1; i <= size; i++) {
  table[i] = [];
  for (let j = 1; j <= size; j++) {
    table[i][j] = i * j;
  }
}
console.log(table);

// read array of objects
function readArrayOfObjects() {
let arr = [];
let obj = {};
let confirmm = true;
    while(confirmm) {
        let key = prompt("Enter key:");
    while (key !== null) {
        let value = prompt("Enter value:");
        obj[key] = value;
        key = prompt("Enter key")
    }
    arr.push(obj);
    confirmm = confirm("Do you want to continue?");
    }
    return arr;
}
console.log(readArrayOfObjects());

// Ромбік
let size = 10;
for (let i = 1; i <= size; i += 2) {
  let row = "";
  for (let j = 1; j <= size - i / 2; j++) {
    row += " ";
  }
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}
for (let i = size - 2; i >= 1; i -= 2) {
  let row = "";
  for (let j = 1; j <= size - i / 2; j++) {
    row += " ";
  }
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}

// DOM

const table = document.getElementById("table");
const size = 10;

for (let i = 0; i <= size; i++) {
  const tr = document.createElement("tr");
  for (let j = 0; j <= size; j++) {
    const td = document.createElement("td");
    if (i > 0 && j > 0) {
      number = i * j;
    } else if (i === 0) {
      number = j;
    } else {
      number = i;
    }
    td.innerText = number;
    tr.appendChild(td);
  }
  table.appendChild(tr);
}
document.body.append(table);

const cells = document.querySelectorAll("td");
for (const cell of cells) {
  cell.onmouseover = (event) => {
    for (let i = 0; i < table.rows.length; i++) {
      const row = table.rows[i];
      row.cells[cell.cellIndex].style.backgroundColor = "lightblue";
    }
    event.target.style.backgroundColor = "grey";
    event.target.parentNode.style.backgroundColor = "yellow";
  };
  cell.onmouseout = (event) => {
    for (let i = 0; i < table.rows.length; i++) {
      const row = table.rows[i];
      row.cells[cell.cellIndex].style.backgroundColor = "";
    }
    event.target.style.backgroundColor = "";
    event.target.parentNode.style.backgroundColor = "";
  };
}
