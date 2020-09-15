// Exercise I

function Rectangle(width, height) {
    this.num1 = width;
    this.num2 = height;
    this.getArea = function () {
        return this.num1 * this.num2;
    };
}

var rect = new Rectangle(4, 5);
rect.getArea();

function Square(num) {
    return Rectangle.prototype.getArea;
}

// Square.prototype.getArea = function () {
//     console.log(this.num3 * this.num3);
// };
var square = new Square(4);
square.getArea();

// Exercise II

function invertCase(param) {
    var convert = "";
    for (var i = 0; i < param.length; i++) {
        if (param[i] == param[i].toUpperCase()) {
            convert += param[i].toLowerCase();
        } else {
            convert += param[i].toUpperCase();
        }
    }
    return convert;
}

invertCase(" UpperCase");
