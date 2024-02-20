const name ="nisha"
const repoCount  = 50


console.log(name  + repoCount + "value")

console.log(`hello mera name hai ${name} and mere pass ${repoCount} repo hai`);

const gameName = new String('vishal-xp-com-op')


console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));


const newString = gameName.substring(0 , 4)
console.log(newString);

const anotherString = gameName.slice(-9 , 4)
console.log(anotherString);
 
newStringOne = "  hidtesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://xp.com%20Vishak"

console.log( url.replace('%20', '~') ); 

console.log(url.includes('xp'));
console.log(url.includes('~'));
console.log(url.includes('%20'));
console.log(url.includes('vishnu'));


console.log(gameName.split('-'));















