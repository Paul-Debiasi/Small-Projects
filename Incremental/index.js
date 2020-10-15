(function () {
  var inputField = $("input");
// var results = $(".results");
  var resultsDiv = $(".results");

inputField.on("input", function () {
    var userInput = inputField.val().toLowerCase();
    var htmlForCountries = "";
        $.ajax({
          url: "https://spicedworld.herokuapp.com/",
          data: {
          q: userInput,
        },
        success: function (response) {
			
			for (var j = 0; j < respose.length; j++) {
              htmlForCountries += "<p class='country'>" + response + "</p>";
			} if (!userInput) {
			  $(".results").html("");
				//  console.log();
            }if (!userInput) {
              $(".results").html("");
            
			}
			  resultsDiv.html(htmlForCountries);

			}
		});
	

searchField.on("input", function (e) {
  if (searchField.val().length === 0) {
    $(resultsDiv).hide();
  } else {
    $(resultsDiv).show();
  }
});

$(".results").on("mouseover", "p", function (e) {
    
    $(".country").removeClass("highlight");
    $(e.target).addClass("highlight");
   
});
// resultsDiv.on("input", function (e) {
//     resultsDiv.html(htmlForCountries).slideToggle();
//     }
// });
$(".results").on("click", "p", function (e) {
  if (searchField.val(e.target.textContent));{
	resultsDiv.html("");
    }
});



searchField.on("blur", function () {});

$(".container").on("click", "p", function (e) {
    resultsDiv = searchField.val();
});
})();
