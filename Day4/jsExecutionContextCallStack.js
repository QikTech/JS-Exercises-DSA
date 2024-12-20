// https://www.youtube.com/watch?v=ByhtOgF6uYM&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=25&pp=iAQB
/* 
1. Global Execution Context
2. Functional Execution Context
3. Eval Execution context

JS Execution Phases 
1. Memory Creation Phase
2. Execution Phase


*/

let val1 = 10
let val2 = 5
function addNumb(num1, num2){
    let total = num1 + num2
    return total
}

let result1 = addNumb(val1, val2)
let result2 = addNumb(10,20)

/*
Step 1 - Global Execution/Global Enviornment get assigned to 'THIS'
Step 2 - Creation Phase/Memory Phase
val 1 - undefined
val 2 - undefined
addNumb - hold function definiton
result1 - undefined
result2 - undefined

Step 3 - Execution Phase
val1 = 10
val2 = 20
addNum()=    Creates another execution Context
                            +
            Creates Execution Thread

            Memory Phase 
            val1 - undefined
            val2 - undefined
            total - undefined

            Execution Context
            num1 = 10
            num2 = 5
            total = 15 - RETURN gets executed into GLOBAL EXECUTION 'THIS'
            Delete this new Execution Block
result1 = 30
addNum() =   Creates another execution Context
                            +
            Creates Execution Thread
            Memory Phase 
            val1 - undefined
            val2 - undefined
            total - undefined

            Execution Phase
            num1 = 10
            num2 = 20
            total = 30 - RETURN gets executed into GLOBAL EXECUTION 'THIS'
            Delete this new Execution Block
result2 = 30

///////////////////////CALL STACK////////////////////////////
Use chrome Sources/Snippets
*/