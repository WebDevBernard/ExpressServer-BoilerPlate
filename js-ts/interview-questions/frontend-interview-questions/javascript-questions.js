// https://www.youtube.com/watch?v=abbdJ4Yfm54
// Question 1: map vs forEach

const arrOne = [2, 5, 3, 4, 7];

// creates a new array
const mapResult = arrOne.map((el) => {
  return el + 2;
});

// modifies original array
const forEachResult = arrOne.forEach((el, i) => {
  arrOne[i] = el + 2;
});

console.log(
  "Question 1:",
  "MAP RESULT:",
  mapResult,
  "FOR EACH RESULT:",
  arrOne
);

// Question 2: null vs undefined

// undefined means a variable is declared but not initialized yet
// let a; // undefined
// console.log(a); // undefined
// let a = null // null
// what is the output for each statement?
console.log("Question 2:", null == undefined); // true ###only checks value
console.log("Question 2:", null === undefined); // false ###checks type and value ###strict equality

// Question 3: explain event delegation

// start live server in index.html
// allows you to click child nodes when selecting only parent with querySelector

// Question 4: Flatten the array

let arrFour = [
  [1, 2],
  [3, 4],
  [5, 6, [7, 8], 9],
  [10, 11, 12],
];

// with decomposition syntax
let flattened = [].concat(...arrFour);
// or using arr.flat(depth)
let arrMethod = arrFour.flat(2);
// custom function
const customFlat = (arr, depth = 1) => {
  let result = [];
  arr.forEach((el) => {
    if (Array.isArray(el) && depth > 0) {
      result.push(...customFlat(el, depth - 1));
    } else result.push(el);
  });
  return result;
};
console.log(
  "Question 4:",
  flattened,
  "ARR.FLAT():",
  console.log(arrMethod),
  "CUSTOM FLAT:",
  customFlat(arrFour)
);

// Round 2
// Question 1: var vs let vs const

// var has global scope
{
  var a = 1;
}
console.log("Round 2 Question 1:", a);
// let and const have block scope
// const can not be reinitialized

// Question 2: setTimeout

// var outputs 3, 3, 3
function b() {
  for (var i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}
// let outputs 0, 1, 2
function b() {
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log("Round 2, Question 2:", i);
    }, i * 1000);
  }
}

console.log(b());

// Question 3: Explain Call, Apply and Bind

let person = {
  name: "Roadside Coder",
  hello: function (thing) {
    console.log("Round 2 Question 3:" + this.name + " say hello " + thing);
  },
};

let alterEgo = {
  name: "Bernard",
};

// All three outputs "Bernard say hello world"
// call
person.hello.call(alterEgo, "world");
// apply expects an array as 2nd parameter
person.hello.apply(alterEgo, ["world"]);
// bind expects a single argument
const newHello = person.hello.bind(alterEgo);
newHello("world");

// Question 5: Composition Polyfill (Infinite currying)

function addFive(a) {
  return a + 5;
}

function substractTwo(a) {
  return a - 2;
}

function multiplyFour(a) {
  return a * 4;
}

const compose = (...functions) => {
  return (args) => {
    return functions.reduceRight((arg, fn) => fn(arg), args);
  };
};
const evaluate = compose(addFive, substractTwo, multiplyFour);

console.log("Round 2 Question 5:", evaluate(5));

// Round 3 Question 1 Implement Promise.all

function showText(text, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text);
    }, time);
  });
}

function myPromiseAll(promises) {
  let result = [];
  return new Promise((resolve, reject) => {
    promises.forEach((p, index) => {
      p.then((result) => {
        result.push(res);
        if (index === promises.length - 1) {
          resolve(result);
        }
      }).catch((err) => reject(err));
    });
  });
}

Promise.all([
  showText("hello", 1000),
  Promise.resolve("hi"),
  // Promise.reject("bye"),
]).then((value) => console.log("Round 3 Question 1, ", value));

// Question 2 Center a div

// start live server in index.html

// // method 1
// {
//   position: abolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(50%, 50%);
// }
// // method 2
// {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
// }
// // method 3
// {
//   display: grid;
//   height: 100vh;
// }

// Question 3 What is the Box Model

// Every CSS element has these properties
// {
// background-color: aquamarine;
// width: 400px;
// border: 5px solid black;
// padding: 20px;
// margin: 20px;
// }

// Question 4 Implement Debounce
// Debounce only after a certain time has past it will perform an action
// cd to test-project // npm start
const myDebounce = (cb, d) => {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, d);
  };
};

const handleChange = myDebounce((e) => {
  console.log(e.target.value);
}, 1000);
