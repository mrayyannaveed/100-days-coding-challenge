// Q15
var guests = ["Abdullah", "Zohaib", "Hamza"];
guests.forEach(function (guests) {
    console.log("Dear ".concat(guests, ", I would like to invite you to dinner at Haveli restaurant."));
});
var guest_not_coming = "Hamza";
console.log("\n".concat(guest_not_coming, ", cannot make it to dinner"));
var new_guest = "Mahad";
// guests[2] = new_guest;
guests[guests.indexOf(guest_not_coming)] = new_guest;
guests.forEach(function (guests) {
    console.log("\nDear ".concat(guests, ", I would like to invite you to dinner at Haveli restaurant."));
});
// Q16
console.log("\nGood news! I found a bigger dinner table");
guests.unshift("Umer");
guests.splice(2, 0, "Faaiz");
guests.push("Rabees");
guests.forEach(function (guests) {
    console.log("\nDear ".concat(guests, ", I would like to invite you to dinner at Haveli restaurant."));
});
console.log(guests);
