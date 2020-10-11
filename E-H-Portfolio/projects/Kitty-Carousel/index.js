(function () {
    var kitties = document.querySelectorAll(".kitty-container img");
    var dots = document.getElementsByClassName("dot");
    var cur = 0;
    var timer;
    // var isCurrentlyAnimating;
    // console.log('dots', dots);
    timer = setInterval(moveKitties, 5000); // what is the output of setTimeout?

    for (var i = 0; i < dots.length; i++) {
        // console.log('dots', dots[i]);
        dots[i].addEventListener("click", function (e) {
            // clearTimeout(timer);
            // console.log(e.target); // don't understand
            // console.log(e.target.id.slice(3)); // don't understand
            console.log("dots[i]", dots[i]);
            if (dots[i] === e.target.classList) {
                console.log(i);
            }
        });
    }

    // console.log('kitties', kitties);
    function moveKitties() {
        kitties[cur].classList.remove("onscreen");
        dots[cur].classList.remove("on");
        kitties[cur].classList.add("offscreen-left");

        if (cur < kitties.length) {
            cur++;
        }
        if (cur === kitties.length) {
            cur = 0;
        }

        kitties[cur].classList.add("onscreen");
        dots[cur].classList.add("on");
    }

    document.addEventListener("transitionend", function (e) {
        if (e.target.classList.contains("offscreen-left")) {
            e.target.classList.remove("offscreen-left");
        }
    });
})();
s