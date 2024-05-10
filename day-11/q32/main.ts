let current_users: string[] = ["sajid", "saim", "shayan", "rayyan", "zohaib"];  
let new_users:string[] = ["Zohaib", "bashir", "owais", "Rayyan", "ayyan"];

new_users.forEach((newUser) => {
    if(current_users.some(
        (currentUser) => currentUser.toLowerCase() === newUser.toLowerCase()
    )
) {
    console.log(`${newUser} will need to enter a new username`);
} else {
    console.log(`${newUser} is available`);
}
});