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

  const toggleBtn = document.createElement("button");
  toggleBtn.innerText = "Show";
  parent.append(toggleBtn);

  let value = "";
  let isOpen = open;

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
      toggleBtn.innerText = "Hide";
      input.type = "text";
    } else {
      toggleBtn.innerText = "Show";
      input.type = "password";
    }
  };

  this.getOpen = () => {
    return isOpen;
  };

  input.oninput = () => {
    value = input.value;
    this.onChange(value);
  };

  toggleBtn.onclick = () => {
    isOpen = !isOpen;
    if (isOpen) {
      toggleBtn.innerText = "Hide";
      input.type = "text";
    } else {
      toggleBtn.innerText = "Show";
      input.type = "password";
    }
    this.onOpenChange(isOpen);
  };
}

const usernameInput = document.createElement('input');
const passwordInput = new Password(document.body, true);

const loginButton = document.createElement('button');
loginButton.innerText = 'Log in';

const loginForm = document.createElement('form');
loginForm.appendChild(usernameInput);
loginForm.appendChild(passwordInput);
loginForm.appendChild(loginButton);

document.body.appendChild(loginForm);

passwordInput.onChange = (data) => console.log(data); 
passwordInput.onOpenChange = (open) => console.log(open);

passwordInput.setValue("qwerty");
console.log(passwordInput.getValue());

passwordInput.setOpen(false);
console.log(passwordInput.getOpen());

// LoginForm Constructor
// Password Verify