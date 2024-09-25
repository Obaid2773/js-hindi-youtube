const user = {
username: 'Obaid',
price: 999,

welcomeMessage:  function(){
    console.log(`${this.username}, welcome to the website`);
    console.log(this);
    
}
}

// user.welcomeMessage()
// user.username = 'hitesh'
// console.log(user.welcomeMessage());


// console.log(this);



function chai(){
    let username = 'Billi'
    console.log(this.username);

    // srf obvjects mai use hogga, functions m nahiii!!
}

chai()

// let chaii = () => {
//     let username = 'Obii'
//     console.log(this.username);
    
// }
// chaii()

const addTwo = (num1 , num2) => {
    return num1 + num2
}
console.log(addTwo(10,189));

// implicit ret 

const addThree = (num1,num2,num3) => num1+num2+num3
console.log(addThree(1,1,11));

// ------------------OR---------------------

const add2 = (num1,num2) => (num1+num2)
console.log(add2(1,1));

// -------------OBJECT RETURN--------------
const objret = ()=> ({username: 'Tankiii..'})
console.log(objret());
