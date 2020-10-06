function generateHtml() {
    const fs = require("fs");
    let directory = "projects";
    let dirBuf = Buffer.from(directory);
    console.log(dirBuf);
    fs.readdir(dirBuf, (err, data) => {
        let myHtml = `<!DOCTYPE html><html><h1>My Portfolio</h1>`;
        for (let i = 0; i < directory.length; i++) {
            if (directory[i].isDirectory()) {
                myHtml += `<a href="/${directory[i].name}"><p>${directory[i].name}</p><a>`;
            }
        }
        if (err) {
            throw console.error();
        } else {
            console.log(data);
        }
    });
}
generateHtml();
console.log(generateHtml);
module.exports.generateHtml = generateHtml;

// fs.readDir
// fs.readdirSync (easier way)
