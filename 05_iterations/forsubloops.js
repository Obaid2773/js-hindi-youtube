let arr = [1,2,3,4,5,6,7,8,9,10]

for (const element of arr) {
    // console.log(element);
    
}
const name = 'obaidullah'

for (const i of name) {
    // console.log(i);
    
}

// Map in javaScript
const map = new Map()
map.set('91', 'INDIA')
map.set('96', 'Saudi Arabia')
map.set('1', 'United States of America')
// console.log(map);

for (const i of map) {
    // console.log(i); 
    
}
//  array destructure

for (const [key, value] of map) {
    console.log(key, value);
    
}
//  objects cannot be iterated in this maner
