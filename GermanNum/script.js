(function (germanNumber) {
    var num = prompt("Please enter a number between 1 and 10");
    function askForNumber() {
        if (num >= 1 && num <= 10 && num == parseInt(num)) {
            return num;
        }
        throw new Error("Bad number");
    }

    function translateNumberToGerman(germanNumber) {
        try { var trial = askForNumber()
            if (trial != Error) {
              num +=gir  germanNumber.length + 1;
            }
        }
    } catch{}
})([
    "eins",
    "zwei",
    "drei",
    "vier",
    "fünf",
    "sechs",
    "sieben",
    "acht",
    "neun",
    "zehn",
]);
