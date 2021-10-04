var express = require("express");
var app = express();
var router = require("./routers/router");
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Simple API Gateway");
});

app.use(router);

// process.on('uncaughtException', err => {
//   console.error('There was an uncaught error', err)
//   process.exit(1) //mandatory (as per the Node.js docs)
// })

console.log("Simple API Gateway run on localhost:3000");

app.listen(3000);
