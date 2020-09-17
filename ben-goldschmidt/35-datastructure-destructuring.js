// # Destructuring

console.log("")
console.log("DESTRUCTURING **Instructions**")
console.log("QUESTION 1. Array Destructuring")
// * Declare the variables `fruit`, `vegetable`, `food`. Assign the following values to the variables respectively: "banana", "cucumber", "bread", "cakes", "pizza" (assign the "bread", "cakes" and "pizza" to `food`). Use array destructuring assignment to complete this task.

let [fruit, vegetable, ...food] = ["banana", "cucumber", "bread", "cakes", "pizza"];

console.log(fruit);
console.log(vegetable);
console.log(food);




console.log("")
console.log("QUESTION 2. Object Destructuring")
// * Create an object which contains key pair values of names and the respective halloween costume e.g. `fran: "witch"`.   Assign each key pair value to corresponding variable. Print out the object values.

//     ({
//         fran: "witch",
//         ben: "wizard",
//         john: "knight"
//     } = { player1, player2, player3 });

let costumes = {
    fran: "witch",
    ben: "wizard",
    john: "knight"
};

let { fran, ben, john } = costumes;

console.log(fran);
console.log(ben);
console.log(john);






console.log("")
console.log("QUESTION 3. Parameters: Object Destructuring ")
// * Create an object with band/musician details e.g. name of the band/musician, greatest hit, nationality, genre etc. 

let music = {
    musician: "Sophie Ellis-Baxter",
    greatestHit: "Murder on the dancefloor",
    nationality: "British",
    genre: "Pop",
}
// * Then, create a function to display all of the band/musician's data. 
// * Example
// ```javascript
// `Regina Spektor is a American-Russian singer/songwriter and pianist. The musician sings indie-pop and their greatest hit is "Us"`.
// ```

function printArtist({
    musician, greatestHit, nationality, genre
}) {
    return (`${musician} is a ${nationality} singer/songwriter and pianist. The musician sings ${genre} and their greatest hit is ${greatestHit}!`)
}
console.log(printArtist(music));