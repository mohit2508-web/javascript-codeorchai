let mydate=new Date();

console.log(mydate)
console.log(mydate.getMonth()+1);

console.log(mydate.toLocaleString())

let mycreateddate=new Date(23,0,2006)

console.log(mycreateddate);

let mytimestamp= Date.now();

console.log(mytimestamp);
console.log(mycreateddate.getTime());
console.log(Math.floor(Date.now()/1000))  // to convert time to millisecond to second

