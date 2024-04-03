// It giving an error because Type 'number' is not assignable to type 'string'.
// let friends: string[] = ["Ahmed", "Saad", "Ali", 1, 2, "Mahmoud", "Aman"];
var friends = ["Ahmed", "Saad", "Ali", "Mahmoud", "Aman"];
console.log(friends);
// giving an undefined 
console.log(friends[5]);
// correcting the error by giving valid value / index
console.log(friends[4] = "Aman");
