var ordinal_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
ordinal_numbers.forEach(function (number) {
    if (number == 1) {
        console.log("".concat(number, "st"));
    }
    else if (number == 2) {
        console.log("".concat(number, "nd"));
    }
    else if (number == 3) {
        console.log("".concat(number, "rd"));
    }
    else {
        console.log("".concat(number, "th"));
    }
});
