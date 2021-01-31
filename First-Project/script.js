(function () {
    var ham = document.getElementById("overlay");
    var burg = document.getElementById("hamburger");
    var div = document.getElementById("side-nv");
    var x = document.getElementById("x");
    // var overlay = document.document.querySelectorAll("a");

    burg.addEventListener("click", function () {
        ham.classList.toggle("on");
        div.classList.toggle("on");
    });

    // ham.addEventListener("click", function () {
    //     div.classList.add("on");
    //     console.log();
    // });

    x.addEventListener("click", function () {
        div.classList.remove("on");
        console.log();
    });
})();
