const marvelHeroes = ["spiderman", "deadpool", "cap"]
const dcHeros = ["batman", "superman", "penguine"]

// marvelHeroes.push(dcHeros)

// console.log(marvelHeroes.at(3));
// console.table(marvelHeroes.at([3][0]));

// CONCAT OPERATOR
const allHeros = marvelHeroes.concat(dcHeros)
// console.log(allHeros);

// SPREAD OPERATOR
const allNewHeros = [...marvelHeroes, ...dcHeros]
// console.log(allNewHeros);

// FLAT OPERATOR
const anotherArray = [1,2,3,[4,5,6],8,[6,7,[1,2]]]
const realAnotherArray = anotherArray.flat(1)
const secondRealAnotherArray = anotherArray.flat(Infinity)
// console.log(realAnotherArray);

// TO CHECK IF THIS IS ARRAY
console.log(Array.isArray("prasad"));
console.log(Array.from("prasad"));
console.log(Array.from({name: "prasad"})); //Intresting
 
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3, marvelHeroes));

