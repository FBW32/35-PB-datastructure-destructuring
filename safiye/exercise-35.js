//#### 1. Array Destructuring
let [fruit, vegatables, ...food] = [
  "banana",
  "cucumber",
  "bread",
  "cakes",
  "pizza",
];
console.log(food);

//#### 2.Object Destructuring
const whowearwhat = { fran: "witch", lena: "frankenstein", tom: "skeletor" };

let fran, lena, tom;
({ fran, lena, tom } = whowearwhat);
console.log(fran, lena, tom);

//#### 3. Parameters: Object Destructuring
const favoriteband = {
  bandName: "Maroon5",
  musicians: [
    "Adam Levine",
    "Michael Madden",
    "PJ Morton",
    "Jesse Carmichael",
    "Matt Flynn",
    "Sam Farrar",
  ],
  gratestHit: "Songs About Jane",
  nationality: "American",
  genre: "Pop-rock",
};

function alldata(obj) {
  let bandName, nationality, genre, musicians, gratestHit;
  ({ bandName, nationality, genre, musicians, gratestHit } = obj);
  let message = `${bandName} is a ${nationality} music band which make ${genre}.The musicians in this band are ${musicians} and the gratest hit of them is "${gratestHit}".`;
  return message;
}
console.log(alldata(favoriteband));
