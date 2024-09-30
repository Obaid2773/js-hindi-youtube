let UserEmail = 'billirubin@gmail'
if (UserEmail) {
    console.log("Got userId");
}else{
    console.log('EnterUserId');
    
}

// falsy values
// false , NaN, undefined, BigInt, 0n , '', 0 ,-0;

// truthy values
// "0", "false", " ",[], {}, function(){}

let array = []
if (array.length === 0) {
    console.log('Array id Empty');
    
}
let Obaid = {}
if (Object.keys(Obaid).length === 0) {
    console.log('Object is empty');
    
}
//  Object.keys(Object) make an object an array
