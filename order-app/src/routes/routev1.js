"use strict";

const routev1 = require("express").Router();

routev1.get("/orders/", (req, res) => {
    res.json({ message: "this is order API" });
});
routev1.get("/orders/:id", (req, res) => {
    res.json({ message: `this is order detail API from id: ${req.params.id}` });
});
routev1.post("/orders", (req, res) => {
    res.json({ body: req.body, header: req.headers });
});
module.exports = routev1;
