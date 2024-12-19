// GLOBAL SCOPE
// let a = 10
// const b = 20
// var c =30


if (true) {
    // BLOCK SCOPE
    let a = 10
    const b = 20
    var c = 30
    d = 40
}

// console.log(a);
// console.log(b);
console.log(c);
console.log(d);

https://www.youtube.com/watch?v=eWwge2YpHhc&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=22
function one(){
    const username = "Prasad"

    function two(){
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website);
    
    two()
}

one()

if(true) {
    const username = "Prasad"
    if(username === "Prasad"){
        const website = "Youtube"
        console.log(username + website);      
    }
    // console.log(website);
}
// console.log(username);

// ==================================================================================================
// 
function addOne(num){
    return num + 1
}
// addOne(5)
console.log(addOne(5));


const addTwo = function(num){
    return num + 2
}
// addTwo(5)
console.log(addTwo(5));
