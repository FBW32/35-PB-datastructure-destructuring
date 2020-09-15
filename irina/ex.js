// Destructuring

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
//The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
//Syntax
let a, b, rest;
[a, b] = [10, 20];
console.log(a); // 10
console.log(b); // 20

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a); // 10
console.log(b); // 20
console.log(rest); // [30, 40, 50]

({ a, b } = { a: 10, b: 20 });
console.log(a); // 10
console.log(b); // 20


// Stage 4(finished) proposal
({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
console.log(a); // 10
console.log(b); // 20
console.log(rest); // {c: 30, d: 40}


// 1. Array Destructuring
// Declare the variables fruit, vegetable, food. Assign the following values to the variables respectively: "banana", "cucumber", "bread", "cakes", "pizza" (assign the "bread", "cakes" and "pizza" to food). Use array destructuring assignment to complete this task.
let fruit, vegetable, food;
 [
     fruit,
     vegetable,
     ...food 
 ]
 =
 [
     'banana', 'cucumbur',  'bread', 'cakes', 'pizza'
 ];

console.log(food); //[ 'bread', 'cakes', 'pizza' ]

// 2.Object Destructuring
// Create an object which contains key pair values of names and the respective halloween costume e.g. fran: "witch". Assign each key pair value to corresponding variable. Print out the object values.
let halloween = {
    fran: 'witch',
    peter: 'monster',
    dan: 'vampire'
};

console.log(halloween);
console.log(halloween.fran); //witch
console.log(Object.values(halloween)); //[ 'witch', 'monster', 'vampire' ]

// 3. Parameters: Object Destructuring
// Create an object with band/musician details e.g. name of the band/musician, greatest hit, nationality, genre etc.
// Then, create a function to display all of the band/musician's data.
// Example
// `Regina Spektor is a American-Russian singer/songwriter and pianist. The musician sings indie-pop and their greatest hit is "Us"`.
const music = [
    {
      genre: 'Bossa Nova',
      details: {
        name: 'Chico Buarque',
        greatest_hit: 'Construção',
        nationality: 'Brasilian'
      },
      period: '70s'
    },
    {
        genre: 'Bossa Nova',
        details: {
          name: 'Joao Gilberto',
          greatest_hit: 'Chega de Saudade',
          nationality: 'Brasilian'
        },
        period: '50s'
      },
  ];
  
  for (const {genre: n, details: {name: a ,greatest_hit: f, nationality: g}} of music) {
    console.log(`${a} is ${g}, sings the genre ${n} and has the hit ${g}`);
  }
  //Chico Buarque is Brasilian, sings the genre Bossa Nova and has the hit Brasilian
//Joao Gilberto is Brasilian, sings the genre Bossa Nova and has the hit Brasilian