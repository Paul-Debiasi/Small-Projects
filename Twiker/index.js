const express = require("express");
const app = express();

const util = require("util");

let { getToken, getTweets, filterTweets } = require("./ticker.js");

getToken = util.promisify(getToken);

getTweets = util.promisify(getTweets);

app.use(express.static("./Ticker"));

app.get("/links.json", (req, res) => {
    console.log("requesting JSON!!!!!");
    // 4 thing we want to do here...
    // 1. We want to ask the twitter API for a token
    getToken()
        .then((parsedBody) => {
            console.log("parseBody:", parsedBody);
        })
        .catch((err) => console.log("err in readdir: ", err));
    // 2. We use that token, to make a request for tweets
    getTweets()
        .then((parsedBody) => {
            console.log("parseBody:", parsedBody);
        })
        .catch((err) => console.log("err in readdir: ", err));
    // 3. We "tidy up" the tweets
    const filteredTweets = filterTweets(tweets);
    // 4. Send back those "filteredTweets" as a response
    res.json(filteredTweets);
});

app.listen(8080, () => console.log("Twicker up and running"));
