const myobj = {
    js: 'javaScript',
    cpp: 'c++',
    py: 'python',
    c: 'C language',
    swift: 'Swift'
}




// for (const key of myobj) {  // of
//     console.log(key);
    
// }
for (const key in myobj) {  // in
    console.log(`${key} shortcut is for ${myobj[key]}`);
}