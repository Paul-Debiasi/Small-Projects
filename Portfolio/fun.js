function generateHtml() {
    const fs = require("fs");
    let myPath = "projects";

    // let dirBuf = Buffer.from(directory);
    // console.log(dirBuf);

    const directory = fs.readdirSync(myPath, { withFileTypes: true });
    let myHtml = `<!DOCTYPE html><html><h1>My Portfolio</h1>`;
    for (let i = 0; i < directory.length; i++) {
        if (directory[i].isDirectory()) {
            myHtml += `<a href="/${directory[i].name}"><p>${directory[i].name}</p><a>`;
        }
    }
    return myHtml;
}
generateHtml();
// console.log(generateHtml());
module.exports.generateHtml = generateHtml;

// fs.readDir
// fs.readdirSync (easier way)
