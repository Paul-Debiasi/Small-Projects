const http = require("http");
const fs = require("fs");
const path = require("path");
const fun = require("./fun.js");

fun.generateHtml();
console.log(fun.generateHtml());

// const { generateHtml } = require("./fun");
let extPath = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".json": "application/json",
    ".gif": "image/gif",
    ".jpg": "image/jpeg",
    ".png": "image/png",
    ".svg": "image/svg+xml",
};

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
    if (req.url === "/") {
        res.end(fun.generateHtml());
        return;
    }
    console.log("filePath", filePath);
    fs.stat(filePath, (err, stats) => {
        if (err) {
            console.log("err in fs.stat:", err);
            res.statusCode = 404;
            return res.end();
        }
        if (stats.isFile()) {
            // path.extname(extPath);
            // console.log(extPath);
            const readStreamHtml = fs.createReadStream(filePath);
            res.setHeader("Content-Type", extPath[path.extname(filePath)]);
            readStreamHtml.pipe(res);
            readStreamHtml.on("error", (err) => {
                console.log("err in readStreamHtml: ", err);
                res.statusCode = 200;
                res.end();
            });
        } else {
            console.log("its a directory");
            if (req.url.endsWith("/")) {
                console.log("filePath:", filePath);
                const readStreamHtml = fs.createReadStream(
                    filePath + "/index.html",
                );
                res.setHeader("Content-Type", "text/html");
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
