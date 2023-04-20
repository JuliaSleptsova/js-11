// Person Constructor
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fatherName = "";

  this.getFullName = function () {
    if (this.fatherName) {
      return this.firstName + " " + this.fatherName + " " + this.lastName;
    } else {
      return this.firstName + " " + this.lastName;
    }
  };
}
const a = new Person("Вася", "Пупкін");
const b = new Person("Ганна", "Іванова");
const c = new Person("Єлизавета", "Петрова");
console.log(a.getFullName()); // Василь Пупкін
a.fatherName = "Іванович"; // Василь Іванович Пупкін

console.log(b.getFullName());

// Person Prototype
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fatherName = "";
}

Person.prototype.getFullName = function () {
  if (this.fatherName) {
    return this.firstName + " " + this.fatherName + " " + this.lastName;
  } else {
    return this.firstName + " " + this.lastName;
  }
};

const a = new Person("Вася", "Пупкін");
const b = new Person("Ганна", "Іванова");
const c = new Person("Єлизавета", "Петрова");
console.log(a.getFullName()); // Вася Пупкін
console.log(b.getFullName()); // Ганна Іванова
console.log(c.getFullName()); // Єлизавета Петрова

// Password
function Password(parent, open) {
  const input = document.createElement("input");
  input.type = "password";
  parent.append(input);

  const toggleBth = document.createElement("button");
  toggleBth.innerText = "Open";
  parent.append(toggleBth);

  value = "";
  isOpen = open;

  this.setValue = (newValue) => {
    value = newValue;
    input.value = value;
  };
  this.getValue = () => {
    return input.value;
  };
  this.setOpen = (newOpen) => {
    isOpen = newOpen;
    if (isOpen) {
      toggleBth.innerText = "Hide";
      input.type = "text";
    } else {
      toggleBth.innerText = "open";
      input.type = "password";
    }
    this.getOpen = () => {
      return isOpen;
    };
  };
  input.oninput = () => {
    value = input.value;
    this.onChange(value);
  };
  toggleBth.onclick = () => {
    isOpen = !isOpen;
    if (isOpen) {
      toggleBth.innerText = "hide";
      input.type = "text";
    } else {
      toggleBth.innerText = "open";
      input.type = "password";
    }
    this.onOpenChange(isOpen);
  };
}

let p = new Password(document.body, true);

p.onChange = (data) => console.log(data); 
p.onOpenChange = (open) => console.log(open);

p.setValue("qwerty");
console.log(p.getValue());

p.setOpen(false);
console.log(p.getOpen());