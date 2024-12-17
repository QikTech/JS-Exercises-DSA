const name = 'prasad';
const repoCount = 50;

// console.log(name + repoCount + ' Value');

//STRING INTERPOLATION
console.log('Hi my name is ${name} and my repo count is ${repocount}');

const gameName = new String('prasad-Sawant-com')

// console.log(gameName[0]);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,40)
console.log(newString);

const anotherString = gameName.slice(-10, 5)
console.log(anotherString);

const newStringOne = '   prasad    '
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://prasad.com/route%10nextroute"
console.log(url.replace('%10', '-'));
console.log(url.includes('priya'));

// console.log(gameName.split(saperator, limit));
console.log(gameName.split('-', '2'));
console.log(gameName.split('-'));

