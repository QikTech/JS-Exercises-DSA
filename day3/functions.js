// console.log("p");
// console.log("r");
// console.log("a");
// console.log("s");
// console.log("a");
// console.log("d");

// FUNCTION DEFINITION
function sayMyName(){
    console.log("p");
    console.log("r");
    console.log("a");
    console.log("s");
    console.log("a");
    console.log("d");
}

// FUNCTION REFERANCE
sayMyName

// FUNCTION EXECUTE
sayMyName()

// FUNCTION WITH ARGUMENT and PARAMETERS
// DURING DECLARATION OF THE FUNCTION => CALLED PARAMETERS
    // function addTwoNumbers(number1, number2){
    //     console.log(number1+number2);    
    // }

//  FUNCTION WITH RETURN STATEMENT, IGNORES ALL AFTER RETURN KEYWORD
function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result

    return number1 + number2
}

// EXECUTE FUNCTION WITH ARGUMENT
// PASSED DURING EXECUTION => CALLED ARGUMENTS
addTwoNumbers(4,8)

const result = addTwoNumbers(50,10)
// console.log("Result", result);

// PASSING ARGUMENTS IN ANOTHER WAYS
//function with default value
function loginUserMessage(userName = "TamporaryValue"){
    // if(userName === undefined){
    //     console.log("Please enter a Username");
    //     return
    // }

    if(!userName){
        console.log("Please enter a Username");
        return
    }

    return `${userName} just logged in`
}

// loginUserMessage("prasad")
// console.log(loginUserMessage("prasad"));
console.log(loginUserMessage());


// FUNCTIONS WITH UNPREDICTED PARAMETERS
//below example is with fixed one parameter
function calculateCartPrice(num1){
    return num1
}
console.log(calculateCartPrice(100));

// example with non fixed parameters
// rest operator in functions ...
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(100,200,400));

// another example
function calculateCartPrice(val1, val2, ...num1){
    return num1
}
console.log(calculateCartPrice(100,200,500,4,400));

///////////////////////////////////////////////////////////////////////////////////////////////////
// PASSING OBJECT TO A FUNCTION //////////////////////////////////////////////////// VERY IMPORTANT
//CREATING OBJECT
const user = {
    userName: "prasad",
    price: 499
}
// /CREATING FUNCTION
function handleObject(anyObject){
    console.log(`username is ${anyObject.userName} and the price is ${anyObject.price}`);
    
}
// EXECUTING FUNCTIONI BY PASSING THE OBJECT 
handleObject(user)

// EXECUTING FUNCTION BY PASSING OBJECT ON THE GO
handleObject({
    userName: "prasad",
    price: 1200000  
})

// PASSING ARRAY TO A FUNCTION
// declaring an array
const myNewArray = [100,200,300,400]
//declaring function for array
function returnSecodValue(getArray){
    return getArray[1]
}
// executing function with array as argument
console.log(returnSecodValue(myNewArray));

 