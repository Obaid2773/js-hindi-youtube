const name = "obaid-ullah-bilal"
const repoCount = 50
console.log(name + repoCount + " value");
console.log(`Hello my name is ${name} and my repo Count is ${repoCount}`);


const gameName = new String ('hitesh-hc-js-hindi') // last se start hota hai isme - walla, positive walla seede
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.charAt(7));
console.log(gameName.indexOf('t'));

const newGameName =gameName.substring(0,6)
console.log(newGameName);

const anotherString = gameName.slice(-8,4) // neg value can be given

console.log(anotherString);

//trim

const newStr1 = "   obaid  ";
console.log(newStr1);
console.log(newStr1.trim()); // removes starting and end spaces

const url = "https://obaid.com/obaid%20ullah";

const StrRpc = url.replace('%20','-')
console.log(StrRpc);

console.log(url.includes('obaid'))

console.log(gameName.split('-')); // replaces an array of splitted strings

