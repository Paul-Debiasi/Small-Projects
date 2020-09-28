(function () {
    // console.log('$: ',$);
    var currentPlayer = "player1";
    var ballOne = $(".ball-one");
    var ballTwo = $(".ball-two");

    $(".column").on("click", function (e) {
        // console.log('clicked on col!!');
        var col = $(e.currentTarget);
        // console.log('col: ',col);
        var slotsInCol = col.children();

        if (currentPlayer === "player2") {
            ballTwo.removeClass("bounce");
            ballOne.addClass("bounce");
        } else {
            ballTwo.addClass("bounce");
            ballOne.removeClass("bounce");
        }

        for (var i = slotsInCol.length - 1; i >= 0; i--) {
            console.log(
                'slotsInCol.eq(i).hasClass("player1"): ',
                slotsInCol.eq(i).hasClass("player1"),
            );
            if (
                !slotsInCol.eq(i).hasClass("player1") &&
                !slotsInCol.eq(i).hasClass("player2")
            ) {
                // console.log('time to do something....');
                slotsInCol.eq(i).addClass(currentPlayer);
                break;
            }
        }
        console.log("i: ", i);
        // this checks if col is full...
        if (i === -1) {
            return;
        }
        var winner2 = $("#winningMessage");
        var winner = $("#winningMessage");
        var hide = $("#hidden");

        var slotsInRow = $(".row" + i);
        if (checkForVictory(slotsInCol)) {
            if (currentPlayer === "player1") {
                // hide.show().addClass("reset");
                hide.html("Player I Win!!");
                winner.addClass("winning-message");
            }
            if (currentPlayer === "player2") {
                hide.html("Player II Win!!");
                winner.addClass("winning-message");
                console.log();
            }
        } else if (checkForVictory(slotsInRow)) {
            // var winner2 = $("#winningMessage");
            var winner = $("#winningMessage");
            var hide = $("#hidden");
            if (currentPlayer === "player1") {
                hide.html("Player I Win!!");
                winner.addClass("winning-message");
                hide.html("Player I Win!!");
            }
            if (currentPlayer === "player2") {
                winner.addClass("winning-message");
                hide.html("Player II Win!!");
            }
        }

        switchPlayer();
    });
    var hide = $("#hidden");
    var winner = $("#winningMessage");
    var winner2 = $("#winningMessage2");
    var allSlot = $(".slot");
    $(".reset").on("click", function () {
        // $("#hidden").html("").hide();
        allSlot.removeClass("player1");
        console.log("allSlot", allSlot.length);
        allSlot.removeClass("player2");
        if (winner.hasClass("winning-message")) {
            winner.removeClass("winning-message");
        }
        if (winner.hasClass("winning-message2")) {
            winner.removeClass("winning-message2");
        }
        // if (hide === hide.show()) {
        //     hide = hide.hide();
        // } else if (hide === hide.hide()) {
        //     hide = hide.show();
        // }
    });
    ////////////////////////////////////////////////////////////////
    // function checkWinner(slotsInCol, slotsInRow) {
    //     var player1 = "player1";
    //     var player2 = "player2";
    //     if (slotsInCol.eq(i).hasClass("player1")) {
    //         console.log("Player1 Won!!");
    //     } else if (slotsInCol.eq(i).hasClass("player2")) {
    //         console.log("Player2 Won!!");
    //     }
    // }

    function checkForVictory(slots) {
        // in  here we will loop over some slots, and check if there are 4 in a row..
        console.log("about to check!!!!", slots);
        var count = 0;
        for (var i = 0; i < slots.length; i++) {
            if (slots.eq(i).hasClass(currentPlayer)) {
                // if the slot has the class current player
                // increment count...
                count++;
                console.log("count: ", count);
                if (count === 4) {
                    return true;
                }
            } else {
                // if not, then reset it back to 0.
                count = 0;
                console.log("count after resetting: ", count);
            }
        }
    }

    function switchPlayer() {
        // if (currentPlayer === 'player1') {
        //     currentPlayer = 'player2';
        // } else {
        //     currentPlayer = 'player1';
        // }
        currentPlayer = currentPlayer === "player1" ? "player2" : "player1";
        // currentPlayer === "player1" ?
        //     currentPlayer = 'player2' :
        //     currentPlayer = 'player1'
    }
    // console.log("currentPlayer before calling switch: ", currentPlayer);
    // console.log("currentPlayer after calling switch: ", currentPlayer);
})();
