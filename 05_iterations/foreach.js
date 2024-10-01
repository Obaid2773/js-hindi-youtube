// for each loop

const heros = ['Superman', 'spiderman', 'shakhtiman', 'doremon']
// heros.forEach(element => {
//     console.log(element);
    
// });

function printme(i){
    console.log(i);
    
}
// heros.forEach(printme)
// heros.forEach(function (i){
//     console.log(i);
    
// })

// 

// heros.forEach( (value , index, arr)=>{
//     console.log(value , index, arr);
    
// })

const arrays = [
    
    {
        languageName: 'JavaScript',
        languagesc: "JS"
    },
    {
        languageName: 'python',
        languagesc: "py"
    },
    {
        languageName: 'c++',
        languagesc: "cpp"
    },
]
arrays.forEach( (i,index)=> {
console.log(i.languageName , index);

})