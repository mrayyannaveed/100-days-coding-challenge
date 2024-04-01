var guests = ["Abdullah", "Zohaib", "Hamza"];
guests.forEach(function (guests) {
    console.log("Dear ".concat(guests, ", I would like to invite you to dinner at Haveli restaurant."));
});
var guest_not_coming = "Hamza";
console.log("".concat(guest_not_coming, ", cannot make it to dinner"));
var new_guest = "Mahad";
// guests[2] = new_guest;
guests[guests.indexOf(guest_not_coming)] = new_guest;
guests.forEach(function (guests) {
    console.log("Dear ".concat(guests, ", I would like to invite you to dinner at Haveli restaurant."));
});
