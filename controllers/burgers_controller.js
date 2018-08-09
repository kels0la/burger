var express = require("express");
var router = express.Router();

var burgerLogic = require("../models/burger");

router.get("/", function(req, res) {
    burgerLogic.all(function(data) {
    //   var hbsObject = {
    //     cats: data
    //   };
    //   console.log(hbsObject);
    //   res.render("index", hbsObject);
    });
  });

module.exports = router;