// //  for loop

// for (let i = 0; i <= 10. ; i++) {
//     const element = i
//     if (element == 5) {
//         console.log('5 is the best number');
        
//     }
//     console.log(element);
    
// }


for (let i = 1; i < 10 ; i++) {

     console.log(`Table of ${i}`);
    
    for (let j = 1; j <= 10; j++) {
        // console.log(`inner loop ${j}`);
        console.log(`${i} * ${j} = ${i*j}`);
        
    }
    
}

// break and continue 
for (let i = 0; i < 11; i++) {
    const element = i;
    if (element == 5) {
        console.log('5 detected');
        
        continue
    }
    console.log(`I am ${element}`);
    
    
}