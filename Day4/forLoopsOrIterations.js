// https://www.youtube.com/watch?v=Y1cpFsXrEgY&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=27&pp=iAQB
// FOR LOOPS

for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(element);
    if (element ==6){
        console.log('Number 6 found');        
    }
    
}

for (let i = 0; i <=10 ; i++) {
    console.log(`Outer Loop Value is:${i}`);
    for (let j = 0; j < 4; j++) {
        // console.log(`Inner Loop Value is:${j} and inner loop Value is:${i}`);      
        console.log(i + '*' + j + ' = ' + i*j);
        
    }
    
}

// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}