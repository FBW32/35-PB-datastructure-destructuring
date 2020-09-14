let [fruit, vegetable, food] = [
  "banana",
  "cucumber",
  ["bread", "cake", "pizza"],
];
console.log([fruit, vegetable, food]);
//or
let result = [fruit, vegetable, food];
result[0] = "banana";
result[1] = "cucumber";
result[2] = ["bread", "cake", "pizza"];
console.log(result);

//2
let halloween = { ...{ name: "", custome: "" } };
halloween.name = ["frank", "sara", "lili"];
halloween.custome = ["witch", "MacNeil", "Yamazaki"];
console.log(halloween);

for (let i = 0; i < halloween.name.length; i++) {
  console.log(`${halloween.name[i]}:${halloween.custome[i]}`);
}

//3
let music = {
  band: "macan",
  musician: "roham",
  greathit: "Rain",
  nationality: "iranian",
};

function musicInfo(obj) {
  console.log(
    `${obj.band} band is a ${obj.nationality} band. The singer is ${obj.musician} and best greatesthit is ${obj.greathit}`
  );
}
musicInfo(music);
