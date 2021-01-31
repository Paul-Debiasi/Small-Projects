const cluster = require("cluster");
const os = require("os");

const numCpus = os.cpus().length;

cluster.setupMaster({
    exec: __dirname + "/index.js",
});

for (let i = 0; i < numCpus; i++) {
    cluster.fork();
}

cluster.on("exit", (worker) => {
    cluster.fork();
});
