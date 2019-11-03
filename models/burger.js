const orm = require("../config/orm");

const burger={
    getAllBurgers: function(cb){
        orm.selectAll("burgers", function(results){
            cb(results);
        })
    }
};

module.exports = burger;