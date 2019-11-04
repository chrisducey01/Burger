const orm = require("../config/orm");

const burger={
    getAllBurgers: function(cb){
        orm.selectAll("burgers", function(results){
            cb(results);
        });
    },
    addBurger: function(burgerName, devoured=false, cb){
        orm.insertOne("burgers",{burger_name: burgerName, devoured: devoured}, function(results){
            cb(results);
        });
    },
    updateBurger: function(burgerId, updateObj, cb){
        orm.updateOne("burgers", updateObj, "id", burgerId, function(results){
            cb(results);
        });     
    }
};

module.exports = burger;