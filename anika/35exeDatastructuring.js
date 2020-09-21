// ***************EXERCISE 25 DATA STRUCTURING *******************

// # Destructuring

// **Instructions**
// #### 1. Array Destructuring
// * Declare the variables `fruit`, `vegetable`, `food`. Assign the following values to the variables respectively: "banana", "cucumber", "bread", "cakes", "pizza" (assign the "bread", "cakes" and "pizza" to `food`). Use array destructuring assignment to complete this task.

let arr = ["banana", "cucumber", "bread", "cakes", "pizza"];
let [fruit, vegetable, ...food] = arr;

console.log(fruit); // banana
console.log(vegetable); // cucumber
console.log(food); // [ 'bread', 'cakes', 'pizza' ]

// #### 2.Object Destructuring
// * Create an object which contains key pair values of names and the respective halloween costume e.g. `fran: "witch"`.   Assign each key pair value to corresponding variable. Print out the object values.

let q2 = {
  henry: "spider",
  corda: "witch",
  lucy: "einstein",
  julius: "roman",
};

let henry, corda, lucy, julius;

({ henry, corda, lucy, julius } = {
  henry: "spider",
  corda: "witch",
  lucy: "einstein",
  julius: "roman",
});

console.log(henry); // spider
console.log(corda); // witch
console.log(lucy); // einstein
console.log(julius); // roman

// #### 3. Parameters: Object Destructuring
// * Create an object with band/musician details e.g. name of the band/musician, greatest hit, nationality, genre etc.
// * Then, create a function to display all of the band/musician's data.
// * Example
// ```javascript
// `Regina Spektor is a American-Russian singer/songwriter and pianist. The musician sings indie-pop and their greatest hit is "Us"`.
// ```

let musician = {
  band: "oasis",
  country: "uk",
  genre: "brit rock",
  year: 1991,
  album: "definitely maybe",
};

function q3({ band, country, genre, year, album }) {
  return `${band} is a ${country} based ${genre} band which founded in the year ${year}. Their firs album was ${album}.`;
}

console.log(q3(musician));
// oasis is a uk based brit rock band which founded in the year 1991. Their firs album was definitely maybe.
