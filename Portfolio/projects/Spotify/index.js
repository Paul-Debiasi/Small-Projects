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
        var bigContainer = $("#container");
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
                var myCompiledTemplate = Handlebars.templates.spotify(
                    responseData,
                );
                bigContainer.html(myCompiledTemplate);
                handleNextUrl(data.next);
                checkScrollPos();
            },
        });
    });
    // console.log('response.next:', response.next);
    // var nextUrl =
    //     response.next &&
    //     response.next.replace(
    //         "api.spotify.com/v1/search",
    //         "spicedify.herokuapp.com/spotify",
    //     );

    var moreButton = $("#more");
    moreButton.hide();
    moreButton.on("click", checkMore);
    function checkMore() {
        $.ajax({
            url: nextUrl,
            method: "GET",
            success: function (secondData) {
                secondData = data.artists || data.albums;

                handleNextUrl(data.next);

                secondData = {
                    data: data.items,
                };
                var myCompiledTemplate2 = Handlebars.templates.spotify(
                    responseData,
                );

                bigContainer.append(html(myCompiledTemplate2));
                console.log(data.items);
                checkScrollPos();
            },
        });
    }

    function handleNextUrl(nextUrl) {
        nextUrl =
            response.next &&
            response.next.replace(
                "api.spotify.com/v1/search",
                "spicedify.herokuapp.com/spotify",
            );
        if (!nextUrl) {
            moreButton.hide();
        } else {
            moreButton.show();
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
                if (nextUrl) {
                    checkMore();
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
