// const user ={
//     username:"Mohit",
//     price:100,
//     greeting:function(){
//          console.log(`${this.username},we are very lucky because u visit our website`)
//     }
// }

// user.greeting();

//+++++++++++++++++++++++++++++++++++++Arrow function++++++++++++++++++++++++++++++++++++++++++++++

// const addtwo=(num1,num2) =>{
//     return num1+num2            // this is one way to define #Method1
// }

// const addtwo=(num1,num2) => num1+num2  // this is Method2

const addtwo=(num1,num2) => (num1+num2)

const user=(username) => ({username:"Mohit"})
console.log(user())