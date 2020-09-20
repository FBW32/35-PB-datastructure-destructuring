/* 1. Array Destructuring
Declare the variables fruit, vegetable, food. Assign the following values to the variables respectively: "banana", "cucumber", "bread", "cakes", "pizza" (assign the "bread", "cakes" and "pizza" to food). Use array destructuring assignment to complete this task. */

 
let var1 = ["banana", "cucumber", "bread", "cakes", "pizza"];
let = [fruit, vegetable,...food] = var1;
console.log(fruit); // banana
console.log(vegetable); // cucamber
console.log(food);  // [ 'bread', 'cakes', 'pizza' ]


/* 2.
2.Object Destructuring
Create an object which contains key pair values of names and the respective halloween costume e.g. fran: "witch". Assign each key pair value to corresponding variable. Print out the object values. */

let {Tom, Frank, Alice} = {
    Tom: "cloun",
    Frank: "witch",
    Alice: "vampire"
};

console.log(Tom); // cloun
console.log(Frank); // witch
console.log(Alice); // vamire

/* 3. 
Parameters: Object Destructuring
Create an object with band/musician details e.g. name of the band/musician, greatest hit, nationality, genre etc.
Then, create a function to display all of the band/musician's data.
Example */


let obj2 = {
    name: "Thom York",
    greatestHit: "Ingenue",
    Nationality: "British",
    genre: "alternative rock"
};
function musisian(dates) {
    return`${obj2.name} is the best ${obj2.genre} ${obj2.Nationality} singer, and his best song is ${obj2.greatestHit}`
}
console.log(musisian(obj2));


