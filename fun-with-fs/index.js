const fs = require("fs");

const myPath = __dirname;
// console.log("dirname", myPath);
const logSizes = (path) => {
    // const myPath = `${path}/files/part1/a/images/`;
    fs.readdir(path, { withFileTypes: true }, (err, content) => {
        if (err) {
            console.log("This is the error :", err);
        }
        // console.log("CONTENT", content);
        content.forEach((file) => {
            if (file.isFile()) {
                fs.stat(`${path}/${file.name}`, (err, stat) => {
                    if (err) {
                        console.log("ERR", err);
                    }
                    // console.log(fs.stat);
                    console.log(`${path}${file.name}:`, stat.size);
                });
            } else {
                // console.log(`${path}${file.name}`);
                logSizes(`${path}/${file.name}`);
            }
        });
    });
};

logSizes(myPath);
const myPath2 = `${__dirname}/files`;
function mapSizes(path) {
    const sizesObj = fs.readdirSync(path, { withFileTypes: true });
    let obj = {};
    for (let i = 0; i < sizesObj.length; i++) {
        if (sizesObj[i].isFile) {
            obj[sizesObj[i].name] = sizesObj[i].size;
            const myStat = fs.statSync(`${path}/${sizesObj[i].name}`);
            console.log(myStat);
        } else if (sizesObj[i].isDirectory) {
            obj[sizesObj[i].name] = mapSizes(`${path}/${sizesObj[i].name}`);
        } else {
            return obj;
        }
        // console.log(obj);
    }
    // console.log("readdirSync has this value:", mapSizes);
}
mapSizes(myPath2);
