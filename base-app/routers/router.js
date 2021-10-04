var express = require("express");
var router = express.Router();
var userRouter = require("./userRouter");
var orderRouter = require("./orderRouter");

router.use((req, res, next) => {
    console.log("Called: ", req.path);
    next();
});

router.use(userRouter);
router.use(orderRouter);

module.exports = router;
