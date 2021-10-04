var express = require("express");
var router = express.Router();
const ApiAdapter = require("./ApiAdapter");

const BASE_URL = "http://localhost:3001";
const api = ApiAdapter(BASE_URL);
router.get("/orders", (req, res) => {
    api.get(req.path).then((resp) => {
        res.send(resp.data);
    });
});

router.get("/orders/:id", (req, res) => {
    api.get(req.path).then((resp) => {
        res.send(resp.data);
    });
});

router.post("/orders", (req, res) => {
    console.log(req.headers);
    api.post(req.path, req.body, { headers: req.headers }).then((resp) => {
        res.send(resp.data);
    });
});

module.exports = router;
