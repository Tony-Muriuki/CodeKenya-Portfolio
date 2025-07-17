//Booleans and Equality
let isFeatured = true;
let hasProfile = false;

const projectStars = 42;
const isPopular = projectStars > 50;
console.log(isPopular); // false

let age = 30;
console.log(age == 30); // true
console.log(age === 30); // true

console.log(10 == "10"); // true
console.log(10 === "10"); // false

let featuredCount = 5;
let featuredCountString = "5";
console.log(featuredCount == featuredCountString); // true
console.log(featuredCount === featuredCountString); // false
