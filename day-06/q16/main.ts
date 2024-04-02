// Q15
let guests: string[] = ["Abdullah", "Zohaib", "Hamza"];
guests.forEach (guests => {
    console.log(`Dear ${guests}, I would like to invite you to dinner at Haveli restaurant.`);
}
)
 
let guest_not_coming: string = "Hamza";
console.log(`\n${guest_not_coming}, cannot make it to dinner`);

let new_guest: string = "Mahad";
// guests[2] = new_guest;
guests[guests.indexOf(guest_not_coming)] = new_guest;
guests.forEach (guests => {
    console.log(`\nDear ${guests}, I would like to invite you to dinner at Haveli restaurant.`);
}
)
// Q16
console.log(`\nGood news! I found a bigger dinner table`);
guests.unshift("Umer");
guests.splice(2, 0, "Faaiz");
guests.push("Rabees");
guests.forEach (guests => {
    console.log(`\nDear ${guests}, I would like to invite you to dinner at Haveli restaurant.`);
}
)
console.log(guests);