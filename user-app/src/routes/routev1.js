"use strict";

const routev1 = require("express").Router();

routev1.get("/users/", (req, res) => {
    res.json({ message: "this is user API" });
});
routev1.get("/users/:id", (req, res) => {
    res.json({ message: `this is user detail API from id: ${req.params.id}` });
});

module.exports = routev1;
