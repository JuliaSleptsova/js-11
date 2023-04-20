// makeProfileTimer
function makeProfileTimer() {
  const start = performance.now();
  return function() {
    const end = performance.now();
    return end - start;
  }
}
 const timer = makeProfileTimer()
    alert('Вимiрюємо час роботи цього alert')
    alert(timer());
    const timer2 = makeProfileTimer()
    prompt('')
    alert(Час роботи двух аlert та одного prompt ${timer()})
    alert(Час роботи prompt та попереднього alert ${timer2()})

// makeSaver
function makeSaver(func) {
  let result;
  return function () {
    if (!result) {
      result = func();
    }
    return result;
  };
}

let saver = makeSaver(Math.random);
let value1 = saver();
let value2 = saver();
alert(`Random: ${value1} === ${value2}`);

let saver2 = makeSaver(() => {
  console.log("saved function called");
  return [null, undefined, false, "", 0, Math.random()][
    Math.floor(Math.random() * 6)
  ];
});
let value3 = saver2();
let value4 = saver2();
value3 === value4;

let namePrompt = prompt.bind(window, "Як тебе звуть?");
let nameSaver = makeSaver(namePrompt);
alert(`Привіт! Prompt ще не було!`);
alert(`Привіт ${nameSaver()}. Щойно запустився prompt, перший та останній раз`);
alert(`Слухай, ${nameSaver()}, го пити пиво. Адже prompt був лише один раз`);


// MyBind
function myBind(fn, context, defaultArgs) {
  return function(...copy) {
    const combArgs = [];
    let defaultArgIndex = 0;

    for (const arg of defaultArgs) {
      combArgs.push(typeof arg !== 'undefined' ? arg : copy[defaultArgIndex++]);
    }
    for (const arg of copy.slice(defaultArgIndex)) {
      combArgs.push(arg);
    }
    return fn.apply(context, combArgs);
  }
}

let pow5 = myBind(Math.pow, Math, [, 5]) 
let cube = myBind(Math.pow, Math, [, 3]) 
pow5(2) 
pow5(4) 
cube(3) 
let chessMin = myBind(Math.min, Math, [, 4, , 5,, 8,, 9])
chessMin(-1,-5,3,15) 
let zeroPrompt = myBind(prompt, window, [undefined, "0"]) 
let someNumber = zeroPrompt("Введіть число") 
const bindedJoiner = myBind((...params) => params.join(''), null, [, 'b', , , 'e', 'f'])
bindedJoiner('a','c','d') === 'abcdef'
bindedJoiner('1','2','3') === '1b23ef'

// checkResult
function checkResult(original, validator) {
  function wrapper(...params) {
    let result;
    do {
      result = original.apply(this, params);
    } while (!validator(result));
    return result;
  }
  return wrapper;
}

const numberPrompt = checkResult(prompt, x => !isNaN(+x)) 
let   number       = +numberPrompt("Введіть число", "0") 
const gamePrompt   = checkResult(prompt, x => ['камень', 'ножиці', 'папір'].includes(x.toLowerCase())) 
const turn         = gamePrompt("Введіть щось зі списку: 'камень', 'ножиці', 'папір'")