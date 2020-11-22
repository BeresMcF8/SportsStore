const express = require("express");
const jsonServer = require("json-server");
const chokidar = require("chokidar");
const cors = require("cors");

const fileName = process.argv[2] || "./data.js";
const port = process.argv[3] || 3500;

let router = undefined;

const app = express();

const createServer = () => {
    delete require.cache[require.resolve(fileName)];
    setTimeout(() => {
        router = jsonServer.router(fileName.endsWith(".js") ?
        require(fileName)() : fileName)
    }, 100)
}

createServer();

// Configure middleware
app.use(cors());
app.use(jsonServer.bodyParser);
app.use("/api", (req, res, next) => router(req, res, next));

chokidar.watch(fileName).on("change", () => {
    console.log("Reloading WebService Data");
    createServer();
    console.log("Reloading Web Service data complete.");
});

app.listen(port, () => console.log(`web service running on ${port}`));

