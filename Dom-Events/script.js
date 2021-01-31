// Exercise I
var stalker = document.getElementById("stalker");

addEventListener("mousemove", function (event) {
    stalker.style.left = event.pageX + "px";
    stalker.style.top = event.pageY + "px";
    console.log(stalker);
});
