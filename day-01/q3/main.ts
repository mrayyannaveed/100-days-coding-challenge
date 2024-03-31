let personName: string = "Rayyan Naveed";
let lowercase = personName.toLowerCase();
console.log(lowercase);
let uppercase = personName.toUpperCase();
console.log(uppercase);
let titlecase = personName
  .split(" ")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
  .join(" ");
console.log(titlecase);
