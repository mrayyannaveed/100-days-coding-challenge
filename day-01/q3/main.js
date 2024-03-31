var personName = "Rayyan Naveed";
var lowercase = personName.toLowerCase();
console.log(lowercase);
var uppercase = personName.toUpperCase();
console.log(uppercase);
var titlecase = personName.split(" ")
    .map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); })
    .join(" ");
console.log(titlecase);
