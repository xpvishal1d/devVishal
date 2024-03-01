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
const obj4 = {  5 : "e" , 6 : "f" }

// const obj3 = { obj1,  obj2 }
// const obj3 =Object.assign({}, obj1, obj2 , obj4 )

const obj3 = {...obj1 ,...obj2 , ...obj4}

// console.log(obj3);

const users = [
    {

    }
]

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogedIn'));

const course ={
    courseName : "Js pathshala",
    price :" $99" ,
    courseInstructor : "hitesh"
}

// console.log( course.courseInstructor);

const {courseInstructor : Instructor}= course

console.log(Instructor);