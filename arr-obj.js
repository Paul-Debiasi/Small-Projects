// Exercise I

var objct = {
    name: "Antonio",
    address: "Warschauer",
};

var arr = ["Berlin", "Milan", "Barcelona", "Paris", "Moscow"];

function each(objOrArr, callback) {
    if (typeof objOrArr === "object") {
        for (var obj in objOrArr) {
            callback(obj, objOrArr[obj]);
        }
    } else if (Array.isArray(objOrArr)) {
        for (var i = 0; i < objOrArr.length; i++) {
            callback(objOrArr[i], i);
        }
    }
}

each(arr, function (a, b) {
    console.log(a, b);
});

// Exercise II

function revArr() {
    var a = [2, 3, 4];
    var b = [];
    for (var i = a.length - 1; i >= 0; i--) {
        b.push(a[i]);
    }
    return b;
}

console.log(revArr());

/// Exercise III

function getLessThanZero(x) {
    var y = x.filter(function (num) {
        return num > 0;
    });
    console.log(y);
}
getLessThanZero([23, -10, 21, 0.01]);
