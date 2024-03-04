
function sayMyName (){
    console.log("v");
    console.log("i");
    console.log("s");
    console.log("h");
    console.log("a");
    console.log("l");
}

// sayMyName()

//  function addTwoNumbers(number1 , number2){
//     console.log(number1 + number2);
//  }
 function addTwoNumbers(number1 , number2){
  //  let result = number1 + number2
  //  return result
  return number1 + number2
 }
  const result = addTwoNumbers (1 ,5)

  // console.log("result :" ,result);

  // function loginUserMessage(username){

  //   if(username=== undefined){
  //     console.log("please enter a username");
  //     return
  //   }
  //   return `${username} just logged in`

  // }

  // // console.log(loginUserMessage("hitesh"));
  // console.log(loginUserMessage());



  function calculateCartPrice (...num1){
    return num1

  }
  console.log(calculateCartPrice(200,400 , 500))

  const user = {
    username : "hitesh",
    price : 299

  }

  function handleObject (anyobject){
console.log(`username is ${anyobject.username} and price id ${anyobject.price}`);

  }

  handleObject({username:"sam",
    price : 123
  })