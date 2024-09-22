//  singleton

//

const mySym = Symbol('Key1');
let myObj = {
    Name: "Obaid",
    Age: 23,
    Address: "261, Firdous Colony Bemina Srinagar J&K INDIA 190018",
    Qualification: "Graduate",
    Designation: "Web Developer",
    "Best Friend": 'Gandu Saleem',
    [mySym]: 'NewKey'

}
// console.log(myObj.Designation);
// console.log(myObj["Designation"]);
// console.log(myObj["Best Friend"]);
// console.log(myObj[mySym]);

myObj.Age = 24;
// Object.freeze(myObj)
myObj.Age = 23;
// console.log(myObj);

myObj.greetings = function(){
    console.log(`Hello! my dear friends, my name is ${this.Name}`);
    
}
// myObj.greetings();
console.log(myObj.greetings());





