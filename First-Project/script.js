(function () {
    var ham = document.getElementById("overlay");
    var burg = document.getElementById("burger");
    var div = document.getElementById("nav-bar");
    var x = document.getElementById("x");
    // var overlay = document.document.querySelectorAll("a");

    burg.addEventListener("click", function () {
        ham.classList.add("on");
        console.log();
    });

    burg.addEventListener("click", function () {
        div.classList.add("on");
        console.log();
    });

    // x.addEventListener("click", function () {
    //     burg.classList.remove("on");
    //     console.log();
    // });
})();
