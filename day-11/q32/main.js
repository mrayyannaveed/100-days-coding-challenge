var current_users = ["sajid", "saim", "shayan", "rayyan", "zohaib"];
var new_users = ["zohaib", "bashir", "owais", "rayyan", "ayyan"];
new_users.forEach(function (newUser) {
    if (current_users.some(function (currentUser) { return currentUser.toLowerCase() === newUser.toLowerCase(); })) {
        console.log("".concat(newUser, " will need to enter a new username"));
    }
    else {
        console.log("".concat(newUser, " is available"));
    }
});
