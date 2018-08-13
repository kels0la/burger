var express = require("express");
var router = express.Router();

var burger = require("../models/burgers.js");

router.get("/", (req, res)  => {
    burger.all(callbackData => {
        let burgerData = {
            burger: callbackData // burger = for handlebars 
        };
        res.render("index", burgerData);
    });
});

router.post("/api/burgers", (req, res) => {
    burger.addOne(req.body.burger_name, result => {
        res.end();
    });
});

router.put("/api/burgers", (req, res) => {
    burger.devour(req.body.id, result => {
        res.status(200).end();
    })
});

module.exports = router;