//   const tinderUser = new Object() // singaltan obj
//   const tinderUser = {} // non singlatan obj


const tinderUser = {}
  tinderUser.id= "123abc"
  tinderUser.name = "shiv"
  tinderUser.isLogedIn = false

//   console.log(tinderUser);

const regularUser = {
    email : "ram@gmail.com",
    fullName : {
        usersFullName :{
            firstName : "vishal",
            lastName : " Singh"
        }
            
    }
}

// console.log(regularUser.fullName.usersFullName.firstName);


const obj1 = { 1: "a", 2: "b"} 
const obj2 = { 3: "c", 4: "d"} 

const obj3 = { obj1,  obj2 }

console.log(obj3);

