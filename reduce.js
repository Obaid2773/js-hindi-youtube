const mynums = [1,2,3,4,5]
// const myTotal = mynums.reduce((acc,cuurval)=>{
//     console.log(`acc = ${acc} and current value = ${cuurval}`);
//     return acc+cuurval
    
// },0)
// console.log(myTotal);

// let ans = mynums.reduce((acc,currVal)=> acc+ currVal, 0)
// console.log(ans);
const ShoppingCart = [
    {
    item: "iPhone 14 Pro",
    Price: 43000
    },
    {
    item: "iPhone 15 Pro",
    Price: 73000
    },
    {
    item: "iPhone 14 ",
    Price: 38000
    },
    {
    item: "iPhone 16 Pro",
    Price: 93000
    },
    {
    item: "iPhone 15 ",
    Price: 53000
    },
    {
    item: "iPhone 14 Pro Max",
    Price: 73000
    }
]
const TotalPrice = ShoppingCart.reduce((acc,item)=> acc+item.Price , 0)
console.log('₹', TotalPrice.toLocaleString('en-IN'));



