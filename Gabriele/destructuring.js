// 1. Array Destructuring
// Declare the variables fruit, vegetable, food. Assign the following values to the variables respectively: "banana", "cucumber", "bread", "cakes", "pizza" (assign the "bread", "cakes" and "pizza" to food). Use array destructuring assignment to complete this task.

let fruit;
let vegetable;
let food;

[fruit, vegetable, ...food] = ["banana", "cucumber", "bread", "cakes", "pizza"];

console.log(fruit); // banana
console.log(vegetable); // Cucumber 
console.log(food);   // [ 'bread', 'cakes', 'pizza' ]
// = "banana";
// = "cucumber";
// = ["bread", "cakes", "pizza"];



// 2.Object Destructuring
// Create an object which contains key pair values of names and the respective halloween costume e.g. fran: "witch". Assign each key pair value to corresponding variable. Print out the object values.

let objHalloween = {
    fran: "witch",
    darwin: "pumpkin",
    ross: "monster",
    mike: "killer"
};

let {fran, darwin, ross, mike } = objHalloween;

console.log(fran); // witch 
console.log(darwin); // pumpkin 
console.log(ross); // monster
console.log(mike); // killer 


// 3. Parameters: Object Destructuring
// Create an object with band/musician details e.g. name of the band/musician, greatest hit, nationality, genre etc.
// Then, create a function to display all of the band/musician's data.
// Example

let bandObject = {
    name: "The Pink Floyd",
    nationality: "English",
    genre: "rock",
    greatestHit: "the wall",
    displayBand: function() {
    return  `My favorite band is called ${this.name}, they are ${this.nationality} and wrote many masterpiece of the ${this.genre} music. Their greatest hits is probably ${this.greatestHit}`;
}
}
console.log(bandObject.displayBand());  // My favorite band is called The Pink Floyd, they are English and wrote many masterpiece of the rock music. Their greatest hits is probably the wall
