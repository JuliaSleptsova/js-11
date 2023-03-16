// Number: odd
let numberString = prompt("Введіть число:");
let number = +numberString; 
if (isNaN(number)) { 
  console.log("Помилка: введіть коректне число")
} 
else { 
  if (number % 2 === 0) { 
    console.log(number + " є парним числом.")
  } else {
    console.log(number + " є непарним числом.")
  }
}

// Boolean
let str = confirm("Do you want to eat?") ? 
          confirm("Do you have something in the fridge?") ? "Then make smth" : "Then buy something" :
              confirm("does your girlfriend want?") ? "then you have to make smth" : "you`re lucky";

// Boolean: if
let sex = confirm("Are you female?");
if (sex) {
    alert("you are female")
} else {
    alert("you are man")
}

// Ternary
let str = confirm("Are you female?") ? 
alert("you are beautiful") : 
alert("I`m sorry, you are man");

// Prompt: or
let age = prompt("enter your age:");

if (!age ||  isNaN(age)) {
    alert("please enter your age");
} else {
    age = Number(age);
alert("thx");
}

// Confirm: or this days
let str = confirm("шопінг?" ) || alert("ти-бяка");

// Confirm: if this days
let str = confirm("шопінг?");
if (!str) {
     alert("ти-бяка");
};

// Default: or
let secondName = prompt("enter you second name")  "Ivanenko";
let firstName = prompt("enter you name")  "Ivan";
let fatherName = prompt("enter you fatherName") || "Ivanovuch";
alert(Привіт, ${secondName} ${firstName} ${fatherName}!);

// Default: if else
let secondName = prompt("enter you second name");
let firstName = prompt("enter you first name");
let fatherName = prompt("enter you fatherName");

if (secondName)
if (firstName)
if (fatherName) {
alert(Привіт, ${secondName} ${firstName} ${fatherName}!);
} else {
    alert("please enter your fatherName")
} else {
    if(fatherName) {
        alert("please enter your firstName") 
    }
     alert("please enter your firstName and fatherName ") 
} else {
    alert("please enter your secondName")
}

// Login and password
let login = prompt("Введіть логін:", "");
if (login === "admin") {
  let password = prompt("Введіть пароль:", "");

  if (password === "qwerty") {
    alert("Ви успішно увійшли у систему!");
  } else {
    alert("Помилка: невірний пароль!");
  }
} else {
  alert("Помилка: невірний логін!");
}

// Currency exchange
let currency = prompt("Введіть валюту (USD, EUR):", "").toUpperCase();
let isBuying = confirm("Ви хочете купити валюту?");
let rate;
if (currency === "USD") {
  rate = isBuying ? 27.5 : 27.0;
} else if (currency === "EUR") {
  rate = isBuying ? 32.0 : 31.5;
} else {
  alert("Невідома валюта!");
}
if (rate) {
  let money = +prompt("Введіть суму на обмін:");
  let result = isBuying ? money / rate : money * rate;
  alert(Результат: ${result.toFixed(2)} грн);
}

// Scissors
let userChoice = prompt("Виберіть: камінь, ножиці або папір?").toLowerCase();
if (userChoice !== "камінь" && userChoice !== "ножиці" && userChoice !== "папір") {
  alert("Некоректний вибір!");
} else {
  let computerChoice = Math.random();
  if (computerChoice < 1) {
    computerChoice = "камінь";
  } else if (computerChoice < 2) {
    computerChoice = "ножиці";
  } else {
    computerChoice = "папір";
  }
  alert("Комп'ютер вибрав: " + computerChoice);
  
  if (userChoice === computerChoice) {
    alert("Нічия!");
  } else if (userChoice === "камінь" && computerChoice === "ножиці"  
             userChoice === "ножиці" && computerChoice === "папір"  
             userChoice === "папір" && computerChoice === "камінь") {
    alert("Ви перемогли!");
  } else {
    alert("Комп'ютер переміг!");
  }
}

// String: lexics
let text = prompt("Введіть текст:");
if (!text.indexOf("fuck")) {
  alert("дуже погане слово!");
} else {
  alert("норм слово");
}