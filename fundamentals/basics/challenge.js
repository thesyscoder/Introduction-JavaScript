// Codding Challenge1 : calculate BMI

const markWeight = 78;
const markHeight = 1.69;

const johnWeight = 92;
const johnHeight = 1.95;

let markBmiCal = markWeight / markHeight ** 2;
let johnBmiCal = johnWeight / johnHeight ** 2;
console.log(markBmiCal, johnBmiCal);

const compareBMI = markBmiCal > johnBmiCal;

console.log(compareBMI);

// Codding Challenge 2: Print given number is even or odd

const number = 31;

if (number % 2 == 0) {
  console.log(`${number} is Even Number`);
} else {
  console.log(`${number} is Odd Number`);
}

// check greater number

if (number > 10) {
  console.log(`${number} is greater than 10`);
} else {
  console.log(`${number} is less than 10`);
}

// check the number is positive
const num = Number(prompt("Enter the number"));

if (num > 0) {
  console.log("Number is positive");
} else {
  console.log("Number is negative");
}
