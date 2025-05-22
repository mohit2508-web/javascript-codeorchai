// singleton
//Object.name

// objects literals
const mysymb=Symbol("key1");
const mybio={
    name:"Mohit Jadon",
    "first name" :"Mohit",
    email:"mohit@gmail.com",
    mobno:8923432240,
    address:"dijijiejij3900",
    [mysymb]:"mykey1"
}

// console.log(mybio.name)  // method-1 to excess the objects value
// console.log(mybio["name"]) // method 2 to excess

// console.log(mybio["first name"]) // method-1 is not applicable at that place

// console.log( typeof mybio[mysymb]) // method-1 is not applicable at that place

// Object.freeze(mybio) //now the object is freeze we can't manupliate the value in it.


mybio.greeting=function(){
    console.log(`hello ${this.name} ! kaise hai app ?`)
}

mybio.greeting2=function(){
    console.log(`mein badhiya hu thanku puchna ke liya`)
}

console.log(mybio.greeting());
console.log(mybio.greeting2());