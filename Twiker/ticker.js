const { Key, Secret } = require("./secrets.json");
const https = require("https");

module.exports.getToken = function (callback) {
    let creds = `${Key}:${Secret}`;
    let encodedCreds = Buffer.from(creds).toString("base64");

    const options = {
        method: "POST",
        host: "api.twitter.com",
        path: "/oauth2/token",
        headers: {
            Authorization: `Basic ${encodedCreds}`,
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
    };
    function cb(response) {
        if (response.statusCode != 200) {
            console.log("something went wrong...", response.statusCode);
            // something went wrong...
            // callback(response.statusCode);
            return;
        }
        let body = "";
        response.on("data", function (chunk) {
            body += chunk;
        });
        response.on("end", function () {
            // console.log('body: ',body);
            let parsedBody = JSON.parse(body);
            console.log("parsedBody: ", parsedBody);
            callback(null, parsedBody.access_token);
        });
    }

    const req = https.request(options, cb);
    req.end("grant_type=client_credentials");
    // this function will get the token from twitter
    // we will do it in the encounter :)
};

module.exports.getTweets = function (bearerToken, callback) {
    // let creds = `${Key}:${Secret}`;
    // let encodedCreds = Buffer.from(creds).toString("base64");

    const options = {
        method: "GET",
        // url:
        //     "http//api.twitter.com/1.1/search/tweets.json?q=nasa&result_type=popular",
        host: "api.twitter.com",
        path: "/1.1/search/tweets.json?q=nasa&result_type=popular",
        headers: {
            Authorization: `Basic ${encodedCreds}`,
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        screen_name: "NASA",
    };

    function cb(response) {
        if (response.statusCode != 200) {
            console.log("something went wrong...", response.statusCode);
            // something went wrong...
            // callback(response.statusCode);
            return;
        }
        let body = "";
        response.on("data", function (chunk) {
            body += chunk;
        });
        response.on("end", function () {
            // console.log('body: ',body);
            let parsedBody = JSON.parse(body);
            console.log("parsedBody: ", parsedBody);
            callback(null, parsedBody);
        });
    }

    const req = https.request(options, cb);
    req.end("grant_type=client_credentials");
    // console.log(https.request(options, cb));

    // this function will get the tweets from twitter
    // you will do this :)
};

module.exports.filterTweets = function (tweets) {
    // this function will tidy up the tweets
    // you will do this :)
};

// twit.stream("statuses/filter", { track: ["love", "hate"] }, function (stream) {
//     stream.on("data", function (data) {
//         console.log(data);
//     });
// });
