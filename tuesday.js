// Exercise I
var a;

function logType(a) {
    if (typeof a === undefined) {
        console.log("Undefined");
    } else if (typeof a === null) {
        console.log("Null");
    } else if (typeof a === Number) {
        console.log("number!");
    } else if (isNaN(a)) {
        console.log("not a number!");
    } else if (typeof a === String) {
        console.log("string!");
    } else if (typeof a === Boolean) {
        console.log("boolean!");
    } else if (typeof a === BigInt) {
        console.log("bigint!");
    } else if (typeof a === Function) {
        console.log("function!");
    } else if (typeof a === Object) {
        console.log("object!");
    } else if (Array.isArray([])) {
        console.log("array!");
    } else {
        console.log("I have no idea!");
    }
}

// Exercise II
var a = {
    Berlin: "Germany",
    Paris: "France",
    "New York": "USA",
};

for (var b in a) {
    console.log(a[b] + ":" + b);
}

// Exercise III

var i = 10;

for (var i = 10; i > 0; i--) {
    console.log(i);
}
