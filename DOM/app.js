// Exercise I

function getItalic(string) {
    var string = document.querySelector("body");
    if (typeof string == "string") {
        string.style.fontStyle = "italic";
        string.style.textDecoration = "underLined";
        string.style.fontWeight = "bold";
    }
    return string;
}

// Exercise II

function getClass(string) {
    var string = document.getElementsByClassName("scottish-text");
    var contain = [];
    for (var x = 0; x < string.length; x++) {
        contain.push(string[i]);
    }
    return contain;
}

// Exercise III
function insertElement() {
    var newDiv = document.createElement("div");
    var h1Text = document.createTextNode("AWESOME");
    newDiv.style.zIndex = 2147483647;
    newDiv.position = "fixed";
    newDiv.style.left = "20px";
    newDiv.style.top = "100px";
    newDiv.style.fontSize = "200px";
    console.log(newDiv, h1Text);
}
insertElement();
