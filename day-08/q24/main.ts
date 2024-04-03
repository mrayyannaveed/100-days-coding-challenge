console.log("Testing equality or inequality with string");
console.log("Vegetables" === "Vegetables");
// console.log("Vegetables" === "vegetables"); // false

console.log("Using the lowercase function");
console.log("Vegetables".toLowerCase() === "vegetables");

console.log("Using the uppercase function");
console.log("vegetables".toUpperCase() === "VEGETABLES");

console.log("Testing numerical conditions");
console.log(100 > 50);
console.log(100 < 50);
console.log(100 >= 50);
console.log(100 <= 50);
// console.log(100 == 50); // false
// console.log(100 != 50); // false

console.log("Testing logical conditions");
console.log(100 > 50 && 100 < 200);
console.log(100 > 50 || 100 < 200);
console.log(!(100 > 50));
console.log(!(100 < 50));
console.log(true && false);
console.log(true || false);

let car = ["Ford", "Rocco", "V8"];
console.log("Is Ford is in car");
console.log(car.includes("Ford"));
console.log("Is Corolla is in car");
console.log(!car.includes("Corolla"));