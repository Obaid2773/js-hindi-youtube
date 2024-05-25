const accountId = 144553  // constant
let accountEmail = "Obaid.com"// variable
var accountPassword = "12345"  // var not used mch
accountCity = "Srinagar"       //varible can be declared this way as well but its very bad 


/* prefer not to use var because of issue in block scope and functional scope
*/
//accountId = 2  // not allowed

let accountState;

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "jammu"

console.table([accountEmail,accountPassword,accountCity,accountState])

console.log(accountId);