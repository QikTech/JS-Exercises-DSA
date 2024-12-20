// https://www.youtube.com/watch?v=GAIbn16Iytc&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=25
// Immediately Invoked Function Expressions IIFE 
// NAMED IIFE
(function chai(){
    console.log('DB CONNECTED');
})();

// ()()
// SIMPLE IIFE
( () => {
    console.log('2nd DB CONNECTED');
    
})();

//IIFE FUNCTION WITH ARGUMENT
( (name) => {
    console.log(`2nd DB CONNECTED To ${name}`);
})("Prasad")