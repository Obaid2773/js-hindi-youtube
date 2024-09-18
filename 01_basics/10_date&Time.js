let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate); /// mothds start from 0 in javaScript

let myCreatedDate = new Date(2024,8,18);
console.log(myCreatedDate.toDateString());

let newDate = new Date("01-14-2023")
console.log(newDate.toDateString());

let time = Date.now();
console.log(time);
console.log(myCreatedDate.getTime());
// timestamp

let myTimeStamp = Date.now()
console.log(myTimeStamp);


let nataDate = new Date();
console.log(nataDate.getTimezoneOffset ());

console.log(nataDate.toLocaleString("default", {
    weekday: "long",
    
}));



