const burger = require("../models/burger");
const express = require("express");
const router = express.Router();

router.get("/api/burgers", (req,res) => {
    burger.getAllBurgers(function (data) {
        console.log(data);
        res.json(data);
    });
}
);

module.exports = router;