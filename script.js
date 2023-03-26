// Literals
const cat = {
     breed: "street",
     color: "white",
     name: "Sonya"
}
console.log(cat);

// Literals expand
const cat = {
     breed: prompt("Enter breed"),
     color: prompt("Enter color"),
     name: prompt("Enter name")
}
console.log(cat);

// Literals copy
const cat = {
     color: "white",
     name: "Sonya"
};
cat.breed = prompt("enter breed");
const catCopy = {...cat};
console.log(cat);
console.log(catCopy);

// HTML tree/ parent
const htmlTree = {
tagName: "body",
children: [
{
tagName: "div",
parent: "body",
children: [
{
tagName: "span",
parent: "div",
children: [],
attrs: {},
text: "Enter a data please:"
},
{
tagName: "br",
parent: "div",
children: [],
attrs: {}
},
{
tagName: "input",
parent: "div",
children: [],
attrs: {
type: "text",
id: "name"
}
},
{
tagName: "input",
parent: "div",
children: [],
attrs: {
type: "text",
id: "surname"
}
}
],
attrs: {}
},
{
tagName: "div",
parent: "body",
children: [
{
tagName: "button",
parent: "div",
children: [],
attrs: {
id: "ok"
},
text: "OK"
},
{
tagName: "button",
parent: "div",
children: [],
attrs: {
id: "cancel"
},
text: "Cancel"
}
],
attrs: {}
}
],
attrs: {}
}

// Destructure
// значення тексту у тезі span
const [div1] = children;
const [span] = div1.children;
// значення тексту в другій кнопці
const [, div2] = children;
const [, btn2] = div2.children;
// значення атрибуту id у другому input
const [input, surname] = div1.children;

// Destruct array 
let arr = [1, 2, 3, 4, 5, "a", "b", "c"];
let [even1, even2] = arr.filter((item) => item % 2 === 0); 
let [odd1, odd2, odd3] = arr.filter((acc) => acc % 2 > 0);
let [letters] = arr.filter((item) => typeof item === 'string');
console.log(even1, even2);
console.log(odd1, odd2, odd3);
console.log(letters);

// Destruct string
let arr = [1, "abc"];
let [number, str] = arr;
let [s1, s2, s3] = str.split("");
console.log(number, s1, s2, s3);

// Destruct 2
let obj = {
  name: 'Ivan',
  surname: 'Petrov',
  children: [
    { name: 'Maria' },
    { name: 'Nikolay' }
  ]
};
let { children: [ { name: name1 }, { name: name2 } ] } = obj;
console.log(name1, name2);

// Destruct 3
let arr = [1, 2, 3, 4, 5, 6, 7, 10];
let [a, b, ...rest] = arr;
let length = arr.length;
console.log(a); 
console.log(b); 
console.log(length); 

// Copy delete
const cat = {
     breed: "street",
     color: "white",
     name: "Sonya"
};
const { name, ...catCopy } = cat;
console.log(catCopy);