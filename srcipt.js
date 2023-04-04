// blocks
let a = 10;
{
  let b = 20;
  {
    let c = 30;
    //a = 100, b = 21, c = 30, d = is not defined

    b++;
    a *= 10;
  }
  {
    let c = 50;
    //a = 100, b = 521, c = 50, d = is not defined
    b += 500;
  }
  {
    const a = 100500;
    const d = "value";
    {
      let a = -50;
      b = 1000;
      //a = -50, b = 1000, c = is not defined, d = "value"
    }
    //a = 100500, b = 1000, c = is not defined, d = "value"
  }
  //a = 100, b = 521, c = is not defined, d = is nor defined
}
//a = 100, b = is not defined, c = is not defined, d = is not defined

// comparison if
const age = +prompt("Скільки вам років?", "");
if (age <= 0) {
    alert("Введіть коректний вік плз");
} else if(age < 18) {
    alert("школяр");
} else if(age > 18 && age < 30){
    alert("молодь");
} else if(age > 30 && age < 45){
    alert("зрілість");
} else if(age > 45 && age < 60){
     alert("захід сонця");
} else if(age > 60) {
    alert("як пенсія?");
} else {
    alert("чи кіборг, чи KERNESS");
}

// switch: sizes
const age = +prompt("Скільки вам років?", "");
switch (true) {
  case age <= 0: 
        alert("Введіть коректний вік pls");
        break;
  case age < 18:
    alert("школяр");
    break;
  case age >= 18 && age < 30:
    alert("молодь");
    break;
  case age >= 30 && age < 45:
    alert("зрілість");
    break;
  case age >= 45 && age < 60:
    alert("захід сонця");
    break;
  case age >= 60:
    alert("як пенсія?");
    break;
  default:
    alert("чи кіборг, чи KERNESS");
    break;
}

// switch: if
const color = prompt("Введіть колір","");
if (color === "red") {
document.write("<div style='background-color: red;'>червоний</div>");
} else if (color === "black") {
document.write("<div style='background-color: black; color: white;'>чорний</div>");
} else if (color === "blue") {
document.write("<div style='background-color: blue;'>синій</div>");
} else if (color === "green") {
document.write("<div style='background-color: green;'>зелений</div>");
} else {
document.write("<div style='background-color: gray;'>Я не зрозумів</div>");
}

// noswitch
const noSwitch = (key, cases, defaultKey='default') => {
    if (key in cases) {
      return cases[key]();
    }
  else if (defaultKey in cases) {
        return cases[defaultKey]();
    } 
}
const drink = prompt("Що ви любите пити")
noSwitch(drink, {
    воду: () => console.log('Найздоровіший вибір!'),
    чай(){
        console.log('Смачна та корисна штука. Не перестарайтеся з цукром')
    },
    "пиво": () => console.log('Добре влітку, та в міру'),
    віскі: function(){
        console.log('Та ви, батечку, естет! Не забудьте лід і сигару')
    },
    default(){
        console.log('шото я не зрозумів')
    }
})

// closure calc
fetch("https://open.er-api.com/v6/latest/USD")
  .then((res) => res.json())
  .then((data) => {
    const div = document.createElement("div");
    div.setAttribute("id", "div-buttons");
    for (const currency in data.rates) {
      const button = document.createElement('button');
      button.innerHTML = currency;
      button.onclick = () => {
        const sum = prompt("Введіть суму:");
        const rates = data.rates[currency];
        const result = sum / rates;
        alert(${sum} ${currency} - ${result.toFixed(1)} USD);
      };
      container.append(button);
    }
    document.body.append(container);
  });

// closure calc 2 
fetch("https://open.er-api.com/v6/latest/USD")
.then((res) => res.json())
.then((data) => {
const selectFrom = document.createElement("select").setAttribute("id", "from"); });
const selectTo = document.createElement("select").setAttribute("id", "to");
const divRate = document.createElement("div").setAttribute("id", "rate");
const inpAmount = document.createElement("input");
inpAmount.setAttribute("id", "amount");
inpAmount.setAttribute("type", "number");

const divResult = document.createElement("div").setAttribute("id", "result");
    for (const key in data.rates) {
      const option = document.createElement("option");
      option.innerText = key;
      selectFrom.append(option);
    }
    for (const key in data.rates) {
      const option = document.createElement("option");
      option.innerText = key;
      selectTo.append(option);
    }
    selectFrom.onchange = () => {
      const from = selectFrom.value;
      const to = selectTo.value;
      const rate = data.rates[to] / data.rates[from];
        divRate.innerText = '${from} = ${rate.toFixed(2)} ${to}';
    };
    selectTo.onchange = () => {
      const from = selectFrom.value;
      const to = selectTo.value;
      const rate = data.rates[to] / data.rates[from];
      divRate.innerText = '${from} = ${rate.toFixed(2)} ${to}';
    };
    inpAmount.oninput = () => {
      const from = selectFrom.value;
      const to = selectTo.value;
      const rate = data.rates[to] / data.rates[from];
      const amount = inpAmount.value;
      const result = amount * rate;
      divResult.innerText = '${amount} ${from} = ${result.toFixed(2)} ${to}';
    };
    document.body.append(selectFrom);
    document.body.append(selectTo);
    document.body.append(divRate);
    document.body.append(inpAmount);
    document.body.append(divResult);
  

// countries and cities
fetch(
  "https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/master/countries.min.json"
)
.then((res) => res.json())
.then((data) => {
const countries = Object.keys(data);
const selectCountries = document.createElement("select").setAttribute("id", "countries");

const selectCities = document.createElement("select").setAttribute("id", "cities");
    for (const key of countries) {
      const option = document.createElement("option");
      option.innerText = key;
      selectCountries.append(option);
    }
    selectCountries.onchange = () => {
      selectCities.innerText = "";
      const cities = data[selectCountries.value];
      for (const city of cities) {
        const cities = document.createElement("option");
        cities.innerText = city;
        selectCities.append(cities);
      }
    };
    document.body.append(selectCountries);
    document.body.append(selectCities);
  });