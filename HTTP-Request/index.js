const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
    request.on("error", (err) => console.log("err in req: ", err));
    response.on("error", (err) => console.log("err in res: ", err));

    // happens for every single request that comes in
    console.log("request method: ", request.method);
    console.log("request url: ", request.url);
    console.log("request headers: ", request.headers);

    if (request.method === "GET" || request.method === "HEAD") {
        // response.end(); --> this causes an error b/c we'd be sending more than 1 response for a single request
        if (request.url === "/secret-page") {
            // this redirects the user to the '/' page
            response.statusCode = 302;
            response.setHeader("Location", "/");
            response.end(); // this sends the response!!
        } else {
            response.setHeader("content-type", "text/html");
            response.statusCode = 200;
            // response.write(`Happy HTTP Day!`);
            // response.end();
            response.end(`<!doctype html>
                           <html>
                            <title>Hello World!</title>
                            <p>Hello World!</p>
                           </html>`);
        }
    } else if (request.method === "PUT") {
        response.statusCode = 200;
        response.end(`<h1> you made a PUT request! </h1>`);
    } else if (request.method === "POST") {
        console.log("you made a POST request!");
        response.setHeader("Location", "/");
        response.statusCode = 302;

        let body = "";

        request.on("data", (chunk) => {
            // body = body + chunk;
            body += chunk;
        });

        request.on("end", () => {
            // this event fires when data has stopped coming in!
            console.log("body: ", body);
            response.setHeader("content-type", "text/html");
            response.statusCode = 200;
            response.end(
                `<h1> POST request has successfully been completed :) </h1>`,
            );
        });
    } else {
        response.statusCode = 405;
    }
    response.end();
});

server.listen(8080, () => console.log("server is listening..."));
