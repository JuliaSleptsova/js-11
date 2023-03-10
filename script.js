
// String: greeting
let userName = prompt("Хелоу, як тебе звати?");
alert(Привіт, ${ userName }!Велкам на мій сайт);


// String: gopni4ek
let str = prompt("Введіть рядок:");
let str2 = str.split(","); 
let newStr = str2.join(", блін,");
alert(newStr + ", блін!");

// String: capitalize
let inputString = prompt("Введіть рядок:");
let outputString = inputString.charAt(0).toUpperCase() + inputString.slice(1).toLowerCase();
alert(outputString);


// String: word count
let inputString = prompt("Введіть рядок:");
let wordCount = inputString.split(" ").length;
alert(wordCount); 

// String: credentials
const firstName = prompt("Будь ласка, введіть ваше ім'я:");
const lastName = prompt("Будь ласка, введіть ваше прізвище:");
const patronymic = prompt("Будь ласка, введіть ваше по-батькові:");
const fullName =${firstName.trim().capitalize()} ${lastName.trim().capitalize()} ${patronymic.trim().capitalize()};
alert(fullName);

// String: beer
let str = "Було жарко. Василь пив пиво вприкуску з креветками";
let result = str.split(" ");
for (let i = 0; i < result.length; i++) {
  if (result[i] === "пиво") {
    result[i] = "чай";
  }
}
str = result.join(" ");
console.log(str);


// String: no tag
const htmlString = '<p>This is a paragraph.</p>';
const startTagIndex = htmlString.indexOf('<');
const endTagIndex = htmlString.indexOf('>');
const stringWithoutTag = htmlString.slice(0, startTagIndex) + htmlString.slice(endTagIndex + 1);
console.log(stringWithoutTag);

// String: new line
const inputString = prompt('Введіть рядок:');
const multiLineString = inputString.split('\\n').join('\n');
alert(multiLineString);


// String: youtube
const numberRegExp =
  /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=|embed\/)?([a-zA-Z0-9-_]{11})/;
const str = prompt("Write something: ");
const match = str.match(numberRegExp);
const videoId = match[1];
const videoHtml = <iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>;
document.write(videoHtml);