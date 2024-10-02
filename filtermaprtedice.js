// const heros = ['jghds', 'kujhfgh',"hrgyjhg","kuhrf"]
// const values = heros.forEach((item)=>{
//     console.log(item);
    
// })
// console.log(typeof values);
// for (const key in values) {
//    console.log(key);
//    for each does not return any values.
//  for return we need filter


// const nums = [1,2,3,4,5,6,7,8,9,10]
// let newNums = nums.filter((num) => (num>4) )
// console.log(newNums, "newnums");
// console.log(typeof nums);
//  old fashon -0-----------------


// let funno = []
// nums.forEach((num)=>{
//     if(num > 1){
//         funno.push(num)
//     }
// })
// console.log(funno);

// // ----------map---------------
// let numarr = [1,2,3,4,5,6,7,8,9,10]
// let copy = numarr.map((num)=> num+100)
// console.log(copy);


// ---------------chaining------------
let numbers = [1,2,3,4,5,6,7,8,9,10]
let result = numbers.map((num)=> num*10)
                    .map((num)=> num+1)
                    .filter((num)=> num>50)
console.log(result);
