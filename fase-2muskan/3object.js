// singleton







// object literals



const mySym = Symbol("key1") 

const JsUser ={
    name : "hetesh",

    "full Name" : "vishal singh",
    age :20,
    email : "vishal@xp.com",
    [mySym]:"myKey1",
    location : "hata",
    isLogedIn:false,
    lastLogedIn : ["Mondat", "Saturday"]
     
}


console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full Name"]);
console.log( JsUser[mySym]);
console.log(typeof JsUser[mySym]);


JsUser.name= "ram kumar"
// Object.freeze(JsUser)
JsUser.name= "vk kumar"

console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello js user");

}

JsUser.greetingTwo = function (){
    console.log(`hello js user ${this["full Name"]}`)
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());






