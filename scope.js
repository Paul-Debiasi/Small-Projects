// Exercise I

function sum() {
    var a = 0;
    for (var i = 0; i < arguments.length; i++) {
        a += arguments[i];
    }
    return a;
}
sum(5, 8, 57);

// Exercise II

function waitThenRun(fN) {
    setTimeout(function () {
        fN();
    }, 1500);
}

waitThenRun("Tomorrow");

// Exercise III

function mystFunc(num) {
    console.log(num);
    if (num <= 0 || Number.isNaN(num)) {
        return "Error";
    } else if (num >= 1000000) {
        return num;
    } else {
        mystFunc(num * 10);
    }
}

mystFunc(10);
