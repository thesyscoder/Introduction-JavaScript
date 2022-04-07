// declare variables

let js = "awesome";

if (js === "awesome") {
  //   alert("Yess!!!, Javascript is awesome");
}

// console log

console.log(12 + 34 + 23 - 133 * 4);
console.log("TheSysCoder");

// variables

let name = "TheSysCoder"; //never use name as variable name because it's reserved keyword in javascript
console.log(name);

let firstName = "";
let first_name = "";

// data types in javascript

let javaScript = true;
console.log(javaScript);

let age = 25;
console.log(age);
console.log(typeof age);

let fruit = "Apple";
console.log(fruit);
console.log(typeof fruit);

// let and const

let ages = 24;
console.log(ages);

ages = 42;
console.log(ages);

// const variable declaration

const birthYear = 1994;
console.log(birthYear);

// const variable called as immutable variables

// Operators in javascript

const now = 2022;

const ageJake = now - 1980;
const ageSarah = now - 1987;
console.log(ageJake, ageSarah);

console.log(ageJake * 2, ageSarah / 10, 2 ** 5);

// assignment operator

let x = 10;

x += 23;

console.log(x);

console.log(x++);
console.log(x--);
console.log(--x);
console.log(++x);
console.log(ageSarah >= 12);
console.log(ageJake <= 12);

// operator precedence

const cur_age = 2022;

const age_j = cur_age - 1991;
const age_k = cur_age - 2010;

console.log(cur_age - 1991 > cur_age - 2010);

// string and templates

const job = "DevOps";
const sysCoder = "i'm SysCoder, Working as " + job;
console.log(sysCoder);

const sysCoder_new = `I'm ${job}`;
console.log(sysCoder_new);

// type conversion in javascript

const inputYear = "1994";

console.log(typeof inputYear);
console.log(Number(inputYear), inputYear, Number(inputYear) + 18);

// Truthy and Falsy values

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("jake"));
console.log(Boolean(""));

const money = 0;

if (money) {
  console.log("Dont Spend to much money");
} else {
  console.log("You have good money");
}

// Equality Operators

const price = 10;

// === called strict equal

if (price === 10) {
  console.log("less price");
}

// == called loose equeal it will compare number and string  format number as well

const num = Number(prompt("What is your favourite number"));

if (num === 23) {
  console.log("Amezing number");
} else {
  console.log("Try another number");
}

// logical operators

const iPhone = true;
const macbook = false;

if (iPhone && macbook) {
  console.log("Apple Lover 💻");
} else if (iPhone || macbook) {
  console.log("Partial lover");
} else {
  console.log("Not apple lover");
}

// ternary operator

const id = 14;

id >= 12 ? console.log("small number") : console.log("Large number");
