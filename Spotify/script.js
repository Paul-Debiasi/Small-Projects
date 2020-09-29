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
        var loadMore = $(".load-more");
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
                $("#results-container").html(myCompiledTemplate);
                // console.log('Response:', response);

                // console.log('response.next:', response.next);
                var nextUrl =
                    response.next &&
                    response.next.replace(
                        "api.spotify.com/v1/search",
                        "spicedify.herokuapp.com/spotify",
                    );
                console.log("next Url to make the request to:", nextUrl);

                // $(".load-more").on("click", function () {
                //     console.log("funziona");
                // });
                // // compose the html
                // var myHtml = "";

                // for (var i = 0; i < response.items.length; i++) {
                // console.log('response.items[i]', response.items[i]);
                //check if the result we are currently looping over has an image
                // var imgUrl = "/default.jpg";
                //     if (response.items[i].images.length > 0) {
                //         imgUrl = response.items[i].images[0].url;
                //     }
                //     var ourUrl = response.items[i].external_urls.spotify;
                //     console.log(ourUrl);
                //     console.log(
                //         "the image Url for" +
                //             response.items[i].name +
                //             " would be:",
                //         imgUrl,
                //     );
                //     myHtml +=
                //         "<div>" +
                //         "<a href='" +
                //         ourUrl +
                //         "target=" +
                //         "'>" +
                //         response.items[i].name +
                //         "<img src='" +
                //         imgUrl +
                //         "'>" +
                //         "</a>" +
                //         "</div>";
                // }

                // if (response.items.length === 0) {
                //     myHtml = "No results found...";
                // }

                $("#results-container").html(myHtml);
            },
        });
    }); // closes the submit btn event handler
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
