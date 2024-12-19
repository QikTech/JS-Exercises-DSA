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
