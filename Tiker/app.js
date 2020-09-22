(function () {
    ticker("ticker1", -1);

    ticker("ticker2", 1);

    function ticker(id, step) {
        jqTicker = $(id);
        // var ticker = document.getElementById(id);
        jqHeadlines = $(".healines");
        // var headlines = ticker.querySelector(".headlines");
        jqLinks = $("A");
        // var links = headlines.getElementsByTagName("A");
        jqCurx = jqCurx.offset().left;
        // var curX = headlines.offsetLeft;
        jqHeadlinesWidth = jqHeadlinesWidth.offset().width;
        // var headlinesWidth = headlines.offsetWidth;

        var tickerWidth = ticker.offsetWidth;
        var linkWidth =
            step < 0
                ? links[0].offsetWidth
                : links[links.length - 1].offsetWidth;
        var animId;

        // $(headlines).on("mouseenter", function(e){
        // 	e.currentTarget;
        // 	$(e.currentTarget).off("mouseleave", )
        // })

        headlines.addEventListener("mouseenter", function (e) {
            cancelAnimationFrame(animId);
        });

        headlines.addEventListener("mouseleave", function () {
            moveHeadlines();
        });

        moveHeadlines();

        function moveHeadlines() {
            curX += step;
            if (step < 0 && curX < -linkWidth) {
                curX += linkWidth;
                headlines.appendChild(links[0]);
                linkWidth = links[0].offsetWidth;
            }
            if (step > 0 && curX + headlinesWidth > tickerWidth + linkWidth) {
                curX -= linkWidth;
                headlines.insertBefore(links[links.length - 1], links[0]);
                linkWidth = links[links.length - 1].offsetWidth;
            }
            headlines.style.left = curX + "px";
            animId = requestAnimationFrame(moveHeadlines);
        }
    }
})();
