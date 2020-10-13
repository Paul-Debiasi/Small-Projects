const express = require("express");
const app = express();

const { getToken, getTweets, filterTweets } = require("./ticker.js");

app.use(express.static("./Ticker"));

app.get("./links.json", (req, res) => {
    console.log("requesting JSON!!!!!");
    // 4 thing we want to do here...
    // 1. We want to ask the twitter API for a token
    getToken(function (err, bearerToken) {
        if (err) {
            console.log("Error in getToken", err);
            return;
        }
        console.log("bearerToken: ", bearerToken);
        // 2. We use that token, to make a request for tweets
        getTweets(bearerToken, function (err, tweets) {
            if (err) {
                console.log("Error in getTweets", err);
                return;
            }
            // 3. We "tidy up" the tweets
            const filteredTweets = filterTweets(tweets);
            // 4. Send back those "filteredTweets" as a response
            res.json(filteredTweets);
        });
    });
});

app.listen(8080, () => console.log("Twicker up and running"));
