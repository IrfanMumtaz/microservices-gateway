"use strict";

global.__basepath = process.cwd();

const express = require("express"),
    app = express(),
    port = process.env.PORT || 3001,
    bodyParser = require("body-parser");
const http = require("http").createServer(app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const router = require(`${global.__basepath}/src/routes/routev1`);
app.use(router);

//listening
http.listen(port);
console.log("RESTful API server started on: " + port);
router;
router;
