// ARRAY DECLARATION TYPE 1
const myArr = [0,1,2,3,4,5,6]
const myHeros = ['cap', 'spiderman']
// console.log(myArr[0]);

// ARRAY DECLARATION TYPE 2
const myArr2 = new  Array(0,1,2,3,4,5,6)
// console.log(myArr[0]);


//  ARRAY METHODS
// myArr.push(100)
// myArr.push(101)
// myArr.pop()

// myArr.unshift(99)
// myArr.unshift(999)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.includes(66));
// console.log(myArr.includes(3));

const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);
// console.log(typeof(newArr));

// SLICE, SPLICE

console.log("Original Array", myArr);

const myNewArray1 = myArr.slice(1, 3)
console.log(myNewArray1);
console.log("Slice Array", myNewArray1);

const myNewArray2 = myArr.splice(1, 3)
console.log(myNewArray2);
console.log("Splice Array", myArr);

