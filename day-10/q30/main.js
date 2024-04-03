var usernames = ["admin", "username1", "username2", "username3", "username4"];
usernames.forEach(function (username) {
    if (username === "admin") {
        console.log("Hello ".concat(username, ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(username, ", thank you for logging in again."));
    }
});
