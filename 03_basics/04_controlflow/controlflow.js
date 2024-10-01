if( 2 != '2'){
    console.log('executed.');
    
}
if(true) console.log('Duck');
const name = 'obii'
const age = 23
if(name || age>30){
    console.log('allowed to fly');
    
}
if(true){

}else if(false){

}else{

}
// -----------switch statement-------

let month = 6;
switch (month) {
    case 1:
        console.log('Januarry');
        
        break;
    case 2:
        console.log('Febuary');
        
        break;
    case 3:
        console.log('March');
        
        break;
    case 4:
        console.log('April');
        
        break;
    case 5:
        console.log('May');
        
        break;
    case 6:
        console.log('June');
        
        break;
    case 7:
        console.log('July');
        
        break;
    case 8:
        console.log('August');
        
        break;
    case 9:
        console.log('September');
        
        break;
    case 10:
        console.log('October');
        
        break;
    case 11:
        console.log('November');
        
        break;
    case 12:
        console.log('December');
        
        break;
    default:
        break;
}


// ----similarly 
let mon = 'Jan'
switch (mon) {
    case 'Jan':
        console.log('matched');
        
        break;

    default:
        break;
}