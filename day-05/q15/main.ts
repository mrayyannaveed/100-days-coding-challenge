let guests: string[] = ["Abdullah", "Zohaib", "Hamza"];
guests.forEach (guests => {
    console.log(`Dear ${guests}, I would like to invite you to dinner at Haveli restaurant.`);
}
)
 
let guest_not_coming: string = "Hamza";
console.log(`${guest_not_coming}, cannot make it to dinner`);

let new_guest: string = "Mahad";
// guests[2] = new_guest;
guests[guests.indexOf(guest_not_coming)] = new_guest;
guests.forEach (guests => {
    console.log(`Dear ${guests}, I would like to invite you to dinner at Haveli restaurant.`);
}
)


