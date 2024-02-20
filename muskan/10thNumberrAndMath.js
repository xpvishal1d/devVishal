const score = 400
console.log(score) //400

const balance = new Number(444)
console.log(balance); // [Number: 444]

console.log(balance.toString()); // 444
console.log(balance.toString().length); //3
console.log(balance.toFixed(11)); //444.00000000000

const otherNumber = 114.397

console.log(otherNumber.toFixed(3)); // 114.397
console.log(otherNumber.toPrecision(3)); //114

const hundreds = 100000000
console.log(hundreds.toLocaleString()); // 10,00,00,000
console.log(hundreds.toLocaleString('en-IN')); //10,00,00,000

console.log("+++++++++++  maths +++++++++++++++")

// +++++++++++++++++++++++++++++++++  math +++++++++++++++++++++++++++++++++++++++++++
console.log("+++++++++++  maths +++++++++++++++")

console.log(Math);
console.log(Math.abs(-4)); //4
console.log(Math.round(4.3)); //4
console.log(Math.round(4.6)); //5

console.log(Math.ceil(4.3)); //5
console.log(Math.floor(4.9)); //4

console.log(Math.min(4,6,5,2,1,5,1,2,1,1,)); //1

console.log(Math.random()); // hamesha 0 se 1 k bich ka value lega
console.log((Math.random()*100)+1);


const min =10 
const max =20

console.log(Math.floor ( Math.random() * (max - min +1) +min))  //ye dice banane me ya otp banane me kam aayega 







