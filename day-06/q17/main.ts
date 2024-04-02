// Q16
let guests: string[] = ["Abdullah", "Zohaib", "Hamza"];
console.log(`\nGood news! I found a bigger dinner table`);
guests.unshift("Umer");
guests.splice(2, 0, "Faaiz");
guests.push("Rabees");
guests.forEach (guests => {
    console.log(`\nDear ${guests}, I would like to invite you to dinner at Haveli restaurant.`);
}
);
console.log(guests);
// Q17
console.log(`\nUnfortunately, I can only invite two people to dinner.`);
while (guests.length > 2) {
    let removed_guest = guests.pop();
    console.log(`Sorry ${removed_guest}, I can't invite you to dinner.`);
}
guests.forEach (guests => {
    console.log(`\nDear ${guests}, I would like to invite you to dinner at Haveli restaurant.`);
}
);
console.log(guests);

guests.splice(0, guests.length);
console.log(guests);