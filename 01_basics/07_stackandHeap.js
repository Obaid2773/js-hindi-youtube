//all primitive datatypes ude stack
//all non primitive use heap

//eg of stack-> copy of data is given
let name1 = "Obaidullah"
let yourname = name1
yourname = "Fehad";
// console.log(yourname);
// console.log(name1);

//eg of heap

let obj1 = {
    name: "Obaid" ,
    email : "ubaidbilal@gmail.com",
    age : 22
};

let obj2 = obj1;
 obj2.email = "Zahroor@hotmail.com";

//  console.log(obj1.email);


 let naav = "Fehad Nazir"
 let FehadsName = naav

 FehadsName = "Fahad"

 console.log(naav);
 console.log(FehadsName);

 let UserOne = {
    name: "Obaid",
    email: "Dengmospta@ladakh.com",
 }
 let userTwo = UserOne;
 userTwo.email= "Darling.com";

 console.log(UserOne.email);
 