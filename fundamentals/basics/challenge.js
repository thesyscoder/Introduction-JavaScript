// calculate BMI

const markWeight = 78;
const markHeight = 1.69;

const johnWeight = 92;
const johnHeight = 1.95;

let markBmiCal = markWeight / markHeight ** 2;
let johnBmiCal = johnWeight / johnHeight ** 2;
console.log(markBmiCal, johnBmiCal);

const compareBMI = markBmiCal > johnBmiCal;

console.log(compareBMI);
