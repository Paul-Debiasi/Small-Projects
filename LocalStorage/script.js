(function () {
    var area = $(".area");
    var saving = $(".save");
    var giveMe = $(".give");

    saving.on("click", function (e) {
        localStorage.setItem("Saving", area.val());
        $(".area").val("");
    });
    giveMe.on("click", function (e) {
        area.val(localStorage.getItem("Saving"));
    });
})();
