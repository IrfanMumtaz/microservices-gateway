var express = require("express");
var router = express.Router();
const ApiAdapter = require("./ApiAdapter");

const BASE_URL = "http://localhost:3002";
const api = ApiAdapter(BASE_URL);
router.get("/users", (req, res) => {
    api.get(req.path).then((resp) => {
        res.send(resp.data);
    });
});

router.get("/users/:id", (req, res) => {
    api.get(req.path).then((resp) => {
        res.send(resp.data);
    });
});

module.exports = router;
