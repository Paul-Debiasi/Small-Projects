// Exercise I
var a;

function logType(a) {
    if (a === undefined) {
        console.log("Undefined");
    } else if (a === null) {
        console.log("Null");
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
