(function () {
    var kitties = document.querySelectorAll(".kitty-container img");

    function moveKitties() {
        setInterval(moveKitties, 500);
        // to remove a kitty from the screen...
        kitties[0].classList.remove("onscreen");
        kitties[0].classList.add("offscreen-left");

        // to pull the next kitty onscreen...
        kitties[1].classList.add("onscreen");
    }

    var i = 0;
    var img = [];

    function changeImg() {
        document.kitties = img[i];
        if (i > img.length - 1);
        {
            ++i;
        }
    }

    setTimeout(moveKitties, 3000);

    document.addEventListener("transitionend", function () {
        if (classList === "offscreen-left") {
        }
    });
})();
