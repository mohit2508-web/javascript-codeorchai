// const promiseone=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("first promise created")
//         resolve()  // connect promise to then
//     },1000)
// })

// const resolve=promiseone.then(function(){
//     console.log("promise resolved one")
// })


// const promisetwo=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("second promise created")
//         resolve()  // connect promise to then
//     },1000)
// }).then(function(){
//     console.log("promise resolved second")
// })



// const promisethree=new Promise(function(resolve,reject){
//     resolve({username:"mohit jadon",email:"mohit@gmail.com"})
// })

// promisethree.then(function(user){
//     console.log(user)
// })


const promisefour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false
        if(!error){
            resolve({username:"mohit jadon",email:"mohit@gmail.com"})
        }else{
            console.log("Error:Something went wrong")
        }
    },1000)
})

promisefour.then(function(user){
    console.log("promise four resolved")
    return user.username
}).then(function(user){
     console.log(user)
}).catch(function(error){
    console.log(error)
}).finally(function(error){
    if(!error){
        console.log(`promise is resolved`)
    }else{
        console.log("promise is rejected")
    }
    
})