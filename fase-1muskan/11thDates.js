// ram bahi sareyaNE

let myDate = new Date() // date ek opject
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());
/*
2024-02-20T09:33:49.563Z
Tue Feb 20 2024 15:03:49 GMT+0530 (India Standard Time)
Tue Feb 20 2024
2024-02-20T09:33:49.563Z
20/2/2024, 3:03:49 pm
*/

let myCreatedDate = new Date(2023, 0,23 , 5 ,3) // month 0 se start hote hai

// let myCreatedDate = new Date("2023-01-14")


console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate.getMonth());
console.log(newDate.getDay());


newDate.toLocaleDateString('default' , {
    weekday : "long",
    timeZone:''

})






