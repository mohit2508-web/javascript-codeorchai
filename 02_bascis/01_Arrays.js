let myarr=new Array(2,4,5,6,7,4);
// console.log(myarr);

// let mynewarr=[2,34,2,4,2,4,2]

// console.log(mynewarr.length);

// myarr.push(1234)
// myarr.pop()


// myarr.unshift(89)
// console.log(myarr);

// myarr.shift(7);
// console.log(myarr);


// const newarr=myarr.join();
// console.log(newarr);


// SLICE vs SPLICE

//SLICE

// console.log("A "+ myarr)
// console.log(myarr.slice(1,3))  // it does not modify the original array

// //SPLICE

// console.log("B " +myarr)
// console.log(myarr.splice(1,3))  // it change the original array 

// console.log("C " +myarr)


// let car=["lambo","Baleno",'swift','verna' ]
// let newcar=['thar' ,'fortuner','innova','crysta']

// // let allcar=car.concat(newcar);// in concate we can only merge one array to other array

// let allcar=[...car,...newcar]; // this is known as spread method ,we can merge variuos array into one

// console.log(allcar);



// let pyirotearr=[1,2,3,4,[5,6,4,[5,563,4,3,1,[5,4,3,21,1]]]]

// let realarr=pyirotearr.flat(Infinity);
// console.log(realarr)

// console.log(Array.isArray("Mohit"))
// console.log(Array.from("Mohit"))
// console.log(Array.from({name : "Mohit"}))


let score1=100;
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))