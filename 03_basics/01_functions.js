function SayMyName() {
    console.log('O');
    console.log('b');
    console.log('a');
    console.log('i');
    console.log('d');
    console.log('u');
    console.log('l');
    console.log('l');
    console.log('a');
    console.log('h');
    
}

SayMyName()

// // function Add2Numbers(number1, number2){
//     console.log(number1+number2);
    
// }
// Add2Numbers(10,10) 
function Add2Numbers(number1, number2){
    return number1+number2
    
}
const result = Add2Numbers(10,10) 
// console.log("Your answer is" , result);
 

// function IsLog(username){
//     if (username === undefined) {
//         console.log('Please enter your Username!');
//         return
        
//     }
    // return `${username} just logged in`
// }

// console.log(IsLog());
// function IsLog(username){
//     if (!username) {
//         console.log('Please enter your Username!');
//         return
        
//     }
//     return `${username} just logged in`
// }
function IsLog(username = 'unknown user'){
    if (username === undefined) {
        console.log('Please enter your Username!');
        return
        
    }
    return `${username} just logged in`
}

console.log(IsLog('Sahil'));


