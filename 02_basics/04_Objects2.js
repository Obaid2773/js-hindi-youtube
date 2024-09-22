//singleton
const tinderUser = new Object();
// console.log(tinderUser);
const tinderUser1 = {}
// console.log(tinderUser1);
tinderUser.name = 'Sahil'
tinderUser.age = 24
const InstaUser = {
    email: 'parray@shemail.com',
    FullName: {
        userFullName:{
            FirstName: 'Yaqoob',
            Lastname : 'Parray'

        }
    }
}
// console.log(InstaUser);
// console.log(InstaUser.FullName.FirstName);
let obj1 = {1:'a'}
let obj2 = {2:'b'}
let obj3 = Object.assign({},obj1,obj2);//merge objects                  ^^    ^^^^
                   // target  sources      
console.log(obj3);

const obbject1 = {...obj1,...obj2}
console.log(obbject1);

const users = [     // array of objects;;;
    {
        name: 'Obaid',
        email: 'bhachj@kuhsk'
    },
    {
        name: 'Obaid',
        email: 'bhachj@kuhsk'
    },{
        name: 'Obaid',
        email: 'bhachj@kuhsk'
    },{
        name: 'Obaid',
        email: 'bhachj@kuhsk'
    },
]
console.log(users[0].name);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('name'));



