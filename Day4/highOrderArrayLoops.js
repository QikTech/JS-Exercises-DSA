// https://www.youtube.com/watch?v=M0YImBHQsWU&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=29
// FOR OF SPECIALISED FOR ARRAYS
// ["", "", ""]
// [{}, {}, {}]

// FOR OF
// for (const element of object) {
//     //syntax
// }
const arr = [1,2,3,4,5]
for (const num of arr){
    console.log(num);    
}

const greetings = 'Welcome Home'
for (const greet of greetings) {
    console.log(`each character is ${greet}`)   
}

// MAPS

const map = new Map()

map.set('IN', 'India')
map.set('FR', 'France')
map.set('USA', 'United states of america')

console.log(map);

// FOR OF LOOP ON MAP
// NORMAL MAP
// for (const key of map) {
//     console.log(key);
// }

// FOR OF LOOP ON MAP
for (const [key, value] of map) {
    console.log(key, `:-`, value);
}

// FOR OF ON OBJECTS
// Declaring Objects
const myObject = {
    IN: 'India',
    FR: 'France'
}
// FOR OF ON OBJECTS
// WILL NOT WORK
// for (const [key, value] of myObject) {
//     console.log(key, `:-`, value);
    
// }

// Declaring Object
const myLanguages = {
    js: 'Javascript',
    DT: 'Dart',
    JAVA: 'JAVA'
}

for (const key in myLanguages) {
  console.log(`${key} shortcut is for ${myLanguages[key]}`);
}