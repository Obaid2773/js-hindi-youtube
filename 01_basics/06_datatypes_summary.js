

// premitive call by value -> copy not actual
// string,number,null,undefined,bigint,boolean,symbol


// non primitive or refrence -> actual data i e location
//-> arrays , objects , functions
// data type of nonprimitive = function and of function its object function


// what is symbol

const id = Symbol(123);
const id2 = Symbol(123);
// console.log(id)
// console.log(id2);
// console.log(id == id2);

// Bigint ko represent krne k loye bade number k aage "n" lagaye

const Bigint = 35465464646546546454654n
//                  like this         ^


// refrence
// array
const nums = ["1","2","3"]
const heros = [",aman","hitesh","manan"]
// console.log(nums + heros);

// objects
let myObj = {
    name : "Obaid" ,
    age : 22  ,
    enrollment : "2020BECE009"

}

//Function

const myFunction = function(){
    console.log("Hello World");

}

myFunction