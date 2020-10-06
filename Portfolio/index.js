const http = require("http");
const fs = require("fs");
const path = require("path");
const fun = require("./fun.js");
fun.generateHtml();

// const { generateHtml } = require("./fun");

http.createServer((req, res) => {
    // const myReadStream = fs.createReadStream(
    //     __dirname + `/projects/Incremental/Incremental.css`,
    // );
    // myReadStream.pipe(res);

    if (req.method !== "GET") {
        res.statusCode = 405;
        return res.end();
    }
    const filePath = path.normalize(__dirname + `/projects` + req.url);
    // console.log(__dirname + `/projects` + req.url);

    if (!filePath.startsWith(`${__dirname}/projects/`)) {
        res.statusCode = 403; // forbidden
        console.log("🚨INTRUDER ALERT!!🚨");
        return res.end();
    }
    console.log("filePath", filePath);
    fs.stat(filePath, (err, stats) => {
        if (err) {
            console.log("err in fs.stat:", err);
            res.statusCode = 404;
            return res.end();
        }
        if (stats.isFile()) {
            console.log("Then serve the file...");
        } else {
            console.log("its a directory");
            if (req.url.endsWith("/")) {
                console.log("filePath:", filePath);
                const readStreamHtml = fs.createReadStream(
                    filePath + "/index.html",
                );
                res.seatHeader("Content-Type", "text/html");
                readStreamHtml.pipe(res);
                readStreamHtml.on("error", (err) => {
                    console.log("err in readStreamHtml", err);
                    res.statusCode = 500;
                    res.end();
                });
            } else {
            }
        }
    });
}).listen(8080, () => console.log("Portfolio up and running"));
