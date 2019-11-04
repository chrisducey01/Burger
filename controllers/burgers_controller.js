const burger = require("../models/burger");
const express = require("express");
const router = express.Router();

// HTML Routes
router.get("/", (req, res) => {
    burger.getAllBurgers(function(data){
        res.render("index",{burger: data});
    })
});


// API Routes
router.get("/api/burgers", (req, res) => {
    burger.getAllBurgers(function (data) {
        console.log(data);
        res.json(data);
    });
});

router.post("/api/burgers/", (req, res) => {
    burger.addBurger(req.body.burger, req.body.devoured, (data) =>{
        console.log(data);
        res.json({id: data.insertId});
    });
});

router.put("/api/burgers/:id", (req, res) => {
    let updateObj = {};
    req.body.burger_name ? updateObj["burger_name"] = req.body.burger_name : null;
    if(req.body.devoured !== undefined){
       req.body.devoured === "true" ? updateObj["devoured"] = true : updateObj["devoured"] = false;
    }  

    burger.updateBurger(req.params.id, updateObj, (data) => {
        console.log(data);
        res.status(200).end();
    });
});

module.exports = router;