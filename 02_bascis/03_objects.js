const myobj={
    objname:"jadugaar",
    serialno:234,
    objchild:{
        childname:"sohit",
        age:13,
        sohitchild:{
            name:"munni",
            munniage:3
        }

    }
}

// console.log(myobj.objchild.sohitchild.name)

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3={5:"a",6:"b"}

console.log({obj1,obj2,obj3})
console.log(Object.assign({},obj1,obj2,obj3))
console.log({...obj1,...obj2,...obj3})

console.log(Object.keys(myobj))
console.log(Object.values(myobj))
console.log(Object.entries(myobj))
console.log(myobj.hasOwnProperty("objname"))


const {objname:fame}=myobj  //this is known as object name destructing we change obj name for our eay refernece
console.log(fame)