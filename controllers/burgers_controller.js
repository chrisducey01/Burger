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

router.post("/api/burgers", (req, res) => {
    if(req.body.burger_name === undefined || req.body.devoured === undefined || req.body.burger_name.length < 1 || req.body.burger_name > 50){
        return req.status(400).end();   
    }
    burger.addBurger(req.body.burger_name, req.body.devoured, (err, data) =>{
        if(err) return res.status(400).end();
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

router.delete("/api/burgers/:id",(req,res)=>{
    burger.removeBurger(req.params.id, (err,data)=>{
        if(err) return res.status(400).end();
        else if(data.affectedRows === 0) return res.status(404).end();
        else res.status(200).end();
    });
});

module.exports = router;