// createPerson
function createPerson(name, surname) {
  return {
    name: name,
    surname: surname,
    getFullName: function() {
      if (this.fatherName) {
        return this.name + " " + this.fatherName + " " + this.surname;
      } else {
        return this.name + " " + this.surname;
      }
    }
  };
}
const a = createPerson("Вася", "Пупкін");
const b = createPerson("Ганна", "Іванова");
const c = createPerson("Єлизавета", "Петрова");
console.log(a.getFullName());
a.fatherName = 'Іванович';
console.log(a.getFullName()); 
console.log(b.getFullName()); 

// createPersonClosure
function createPersonClosure(name, surname) {
  let age;
  let fatherName;

  function getName() {
    return name;
  }
  function setName(newName) {
    if (typeof newName !== 'string' && newName[0] === newName[0].toUpperCase()) {
      return name;
    }
    name = newName;
    return name;
  }

  function getSurname() {
    return surname;
  }
  function setSurname(newSurname) {
    if (typeof newSurname !== 'string' && newSurname[0] === newSurname[0].toUpperCase()) {
      return surname;
    }
    surname = newSurname;
    return surname;
  }

  function getFatherName() {
    return fatherName;
  }
  function setFatherName(newFatherName) {
    if (typeof newFatherName !== 'string'  && newFatherName[0] === newFatherName[0].toUpperCase()) {
      return fatherName;
    }
    fatherName = newFatherName;
    return fatherName;
  }

  function getAge() {
    return age;
  }
  function setAge(newAge) {
    if (typeof newAge !== 'number' && newAge > 0 && newAge <= 100) {
      return age;
    }
    age = newAge;
    return age;
  }

  function getFullName() {
    let fullName = surname + ' ' + name;
    if (fatherName) {
      fullName += ' ' + fatherName;
    }
    return fullName;
  }
  function setFullName(newFullName) {
    const parts = newFullName.split(' ');
    if (parts.length === 2 || parts.length === 3) {
      const newSurname = parts[0];
      const newName = parts[1];
      const newFatherName = parts[2];
      setSurname(newSurname);
      setName(newName);
      setFatherName(newFatherName);
    }
  }

  return {
    getName,
    setName,
    getSurname,
    setSurname,
    getFatherName,
    setFatherName,
    getAge,
    setAge,
    getFullName,
    setFullName
  };
}

const a = createPersonClosure("Вася", "Пупкін");
const b = createPersonClosure("Ганна", "Іванова");
console.log(a.getName());
a.setAge(15);
a.setAge(150); 
b.setFullName("Петрова Ганна Миколаївна");
console.log(b.getFatherName()); 

// createPersonClosureDestruct
const createPersonClosureDestruct = ({
  name = "Julia",
  surname = "S",
  fatherName = "O",
  age = 19,
}) => {
	return {
		name,
		surname,
		fatherName,
		age
	}
};
const a = createPersonClosureDestruct(createPerson("Вася Пупкін"))
const b = createPersonClosureDestruct({ name: 'Миколай', age: 75 })

// isSorted
function isSorted(...params) {
 for (let i = 0; i <= params.length - 1; i++) {
    if (typeof params[i] !== "number" || params[i] <= params[i - 1]) {
      return false;
    }
  }
  return true;
};
console.log(isSorted(1, 2)); 
console.log(isSorted(3, 2)); 

// Test isSorted 
function isSorted(...params) {
  for (let i = 0; i < params.length - 1; i++) {
    if (params[i] > params[i + 1]) {
      return false;
    }
  }
  return true;
}
let arr = [];

while (true) {
  let input = prompt("Введіть число");

  if (input === null) {
    break;
  }

  arr.push(Number(input));
}

console.log(arr);
console.log(isSorted(...arr));

// personForm

// getSetForm

// Arrow to Functions

// 1
const tempFunc = prompt();
function temperature(temp) {
  return temp * 1.8 + 32;
}
let result = temperature(tempFunc);
alert(result);

// 2
function newLine(str) {
  return str.split("\\n").join("\n");
}
const string = "Рядок \\nНаступний рядок";
console.log(newLine(string));

// 3
const str = prompt("Enter smth");
const defaultStr = "empty";
function str2(promptText, defaultValue) {
  return !promptText || promptText === "" ? defaultValue : promptText;
}
console.log(str2(str, defaultStr));

// 4
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

// 5
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