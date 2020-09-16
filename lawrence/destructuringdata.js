// #### 1. Array Destructuring
//* Declare the variables `fruit`, `vegetable`, `food`. Assign the following values to the variables respectively: "banana", "cucumber", "bread", "cakes", "pizza" (assign the "bread", "cakes" and "pizza" to `food`). Use array destructuring assignment to complete this task.


let fruit =["banana"];
let vegetable =["cucumber"];
let food = ["bread","cakes","pizza"];

[nwFruit] = fruit;
console.log(nwFruit); // banana


[pln] = vegetable
console.log(pln); // cucumber


[fd1,fd2,fd3] = food
console.log(fd1,fd2,fd3); // bread cakes pizza

//#### 2.Object Destructuring
//* Create an object which contains key pair values of names and the respective halloween costume e.g. `fran: "witch"`.   Assign each key pair value to corresponding variable. Print out the object values. 

let = {
    Frank: "pumpkin",
    Tom: "flyman",
};

({Franky, Tommy} ={Franky:"pumpkin", Tommy: "flyman"});

console.log(Franky); // pumpkin

console.log(Tommy);  // flyman

//  #### 3. Parameters: Object Destructuring 
//* Create an object with band/musician details e.g. name of the band/musician, greatest hit, nationality, genre etc. 
//* Then, create a function to display all of the band/musician's data.

const icon = {
    artist: "Michael McCary",
    band_name: "boyzIIMen",
    genre: "Hip Hop",
    top_hit: "End of the Road",
    year : 1992,
    nationality: "USA" 
};

function musicIcon({artist,band_name,genre,top_hit,year,nationality}) {
    return (`the musician ${artist} is a singer with the group ${band_name} specialize in the brand ${genre}, they had their top track ${top_hit} in the year ${year},the band ${band_name} is originally from ${nationality}`);
}

console.log(musicIcon(icon)); 

// the musician Michael McCary is a singer with the group boyzIIMen specialize in the brand Hip Hop, they had their top track End of the Road in the year 1992,the band boyzIIMen is originally from USA
