// const cars=["lmabo","verna","desire"]

// // cars.forEach(function (item){
// // console.log(item);
// // })

// cars.forEach((item)=>{
// console.log(item);
// })



// filter

const numbers=[1,2,3,4,5,6,7,8]

// let num=numbers.filter((num)=>{
//     return num>4
// })

// const newnum=[]
// numbers.forEach(function(num){
//     if(num>4){
//         newnum.push(num)
//     }
// })


// map

// const newnum=numbers.map((num)=> num+10)



// reduce

// const newnum=numbers.reduce((acc,currentval)=>{
//     console.log(`acc: ${acc} and currentval: ${currentval}`)
//     return acc+currentval
// },0)

// console.log(newnum)


const mycourse=[{
    coursename:"data science",
    price:3999
},
{
coursename:"python",
    price:3999
},
{
    coursename:"web3",
    price:3999
}
]
const carttotal=mycourse.reduce((acc,item)=> acc+item.price,0)

console.log(carttotal)