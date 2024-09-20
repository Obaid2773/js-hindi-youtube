const arr = [1,2,3,4,5,6,]
console.log(typeof arr);
const nums = [7,8,9]

const concattedarr = arr.concat(nums);
console.log(concattedarr);
 // Another method to mergr two arrays

 // SPREAD OPERATOR

 const newww = [...arr,...nums];
 console.log(newww);
 let pagalArray = [1,2,[1,2,3],5,6,[2,[1,2]]];
 let mushkilliSeThkKiyaHwaArray = pagalArray.flat(Infinity);
 console.log(mushkilliSeThkKiyaHwaArray);

 console.log(Array.isArray('dougloueedouglou'));
 console.log(Array.of('dougloueedouglou'));
 console.log(Array.from('dougloueedouglou'));
 console.log(Array.isArray([1,2,3,4,5]));

 