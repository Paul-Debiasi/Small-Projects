(function () {
    Handlebars.templates = Handlebars.templates || {};

    var templates = document.querySelectorAll(
        'script[type="text/x-handlebars-template"]',
    );

    Array.prototype.slice.call(templates).forEach(function (script) {
        Handlebars.templates[script.id] = Handlebars.compile(script.innerHTML);
    });
    console.log("sanity check myself:", $);

    $("#submit-btn").on("click", function () {
        // console.log('yo gimme gimme got clicked');
        var userInput = $("input[name=user-input]").val(); // we have a multitude of ways of grabbing our input field we deliberately chose the name attribute so that we see another way of doing this, also the name attribute will become important in the near future ;)
        console.log("user wants information on:", userInput);
        var albumOrArtist = $("select").val();
        console.log("user want either artist or album?", albumOrArtist);
        //var baseUrl = 'https://spicedify.herokuapp.com/spotify';

        $.ajax({
            //this will make the request to our proxi API
            url: "https://spicedify.herokuapp.com/spotify",
            method: "GET",
            data: {
                query: userInput,
                type: albumOrArtist,
            },
            success: function (responseData) {
                // this function runs, when we have received a successful response from the API
                var response = responseData.artists || responseData.albums;
                // console.log('response from the Spotify API:', responseData);
                // var urlSpot = external_urls.spotify;
                responseData = {
                    response: response.items,
                };

                console.log(responseData);
                var myCompiledTemplate = Handlebars.templates.spotify(
                    responseData,
                );
                $("#container").html(myCompiledTemplate);
                handleNextUrl(data.next);
            },
        });
    });
    // console.log('response.next:', response.next);
    var nextUrl =
        response.next &&
        response.next.replace(
            "api.spotify.com/v1/search",
            "spicedify.herokuapp.com/spotify",
        );
    console.log("next Url to make the request to:", nextUrl);
    var moreButton = $("#more");
    moreButton.hide();
    $(document).on("click", "#more", function (req, res) {
        console.log("#more");
        $.ajax({
            url: nextUrl,
            method: "GET",
            success: function (data) {
                data = data.artists || data.albums;

                handleNextUrl(data.next);
                checkScrollPos();
                results.append(getResultHtml(data.items));
                console.log(data.items);
            },
        });
    });

    function handleNextUrl(nextUrl) {
        nextUrl =
            response.next &&
            response.next.replace(
                "api.spotify.com/v1/search",
                "spicedify.herokuapp.com/spotify",
            );
        if (!nextUrl) {
            $("#more").hide();
        } else {
            $("#more").show();
        }
    }

    $("#container").html(myHtml);

    // function checkScrollPos() {
    //     var hasScrolledToBottom; // set to true if the height of the window plus the scroll top is greater than or equal to the height of the page minus a reasonable buffer
    //     if (hasScrolledToBottom) {
    //         // go get more!
    //     } else {
    //         setTimeout(checkScrollPos, 500);
    //     }
    // }

    function checkScrollPos() {
        if (location.search.indexOf("scroll=infinite") > -1) {
            moreButton.hide();
            if (
                $(window).height() + $(document).scrollTop() >=
                $(document).height() - 300
            ) {
                var hasScrolledToBottom = true;
            }
            if (hasScrolledToBottom) {
                if (newUrl) {
                    getMore();
                }
            } else {
                setTimeout(checkScrollPos, 500);
            }
        }
    }

    // closes the submit btn event handler
})(); // iife closed
// "<div>" +
//     "<a href='" +
//     ourUrl +
//     "'>" +
//     response.items[i].name +
//     +"<img src='" +
//     imgUrl +
//     "'>" +
//     "</a>" +
//     "</div>";
// responseData = {
//     response: response.items,
// };

// console.log(responseData);
// var myCompiledTemplate = Handlebars.templates.spotify(responseData);
// $("#results-container").html(myCompiledTemplate);
