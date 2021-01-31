const q = require("querystring");

const query = q.parse(process.argv[0]);
console.log();

// var q = querystring.parse("protocol");
const url = require("url");
const parse = url.parse(process.argv[2]);
// const process = require(process.argv);
console.log(" The protocol is " + parse.protocol);
console.log(" The host is " + parse.host);
console.log(" The hostname is " + parse.hostname);
console.log(" The port is " + parse.port);
console.log(" The query is " + parse.query);

// console.log(url);
// console.log(process.argv[2]);
// console.log(process.url);
