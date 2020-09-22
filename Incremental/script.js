(function (countries) {
    var searchField = $("input");
    var searchField = $('input[name="search"]');
    var resultsDiv = $(".results");

    searchField.on("input", function (e) {
        // e.target
        // e.currentTarget
        var userInput = searchField.val().toLowerCase();

        var results = [];
        for (var i = 0; i < countries.length; i++) {
            if (countries[i].toLowerCase().indexOf(userInput) === 0) {
                results.push(countries[i]);
            }
            if (results.length === 4) {
                break;
            }
            if (resultsDiv.length === 0) {
                resultsDiv.html("");
            }
            if (searchField.val() === "") {
                resultsDiv.html("");
            }
        }
        var htmlForCountries = "";

        for (var j = 0; j < results.length; j++) {
            htmlForCountries += "<p class='country'>" + results[j] + "</p>";
        }
        resultsDiv.html(htmlForCountries);
    });
    searchField.on("input", function (e) {
        if (searchField.val().length === 0) {
            $(resultsDiv).hide();
        } else {
            $(resultsDiv).show();
        }
    });

    $(".results").on("mouseover", "p", function (e) {
        $(e.targert).addClass(".highlight");
    });
    $(".results").on("mouseleave", "p", function (e) {
        $(e.targert).removeClass(".highlight");
    });
    // resultsDiv.on("input", function (e) {
    //     resultsDiv.html(htmlForCountries).slideToggle();
    //     }
    // });
    $(".results").on("click", "p", function (e) {
        if (searchField.val(e.target.textContent));
        resultsDiv.html("");
    });

    // resultsDiv.on("mouseover", "results", function (e) {
    //     for (var i = 0; i < results.length; i++)
    //         $(e.target[i]).css({
    //             "background-color": "dimgrey",
    //             color: "white",
    //             padding: "5px",
    //         });
    // });

    // searchField.on("blur", function () {});

    $(".container").on("click", "p", function (e) {
        resultsDiv = searchField.val();
    });
})([
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Côte D'Ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Democratic People's Republic of Korea",
    "Democratic Republic of the Congo",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People’s Democratic Republic",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Republic of Korea",
    "Republic of Moldova",
    "Romania",
    "Russian Federation",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Tajikistan",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United Republic of Tanzania",
    "United States of America",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "Viet Nam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
]);
