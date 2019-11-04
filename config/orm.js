const connection = require("./connection");

const orm={
    selectAll: function(tableName, cb){
        connection.query("SELECT * FROM ??",tableName,(err,results)=>{
            if(err) throw err;
            cb(results);
        });
    },
    insertOne: function(tableName, rowObj, cb){
        connection.query("INSERT INTO ?? SET ?", [tableName,rowObj], (err,results)=>{
            if(err) throw err;
            cb(results);
        });
    },
    updateOne: function(tableName, rowObj, whereCol, whereVal, cb){
        connection.query("UPDATE ?? SET ? WHERE ?? = ?",[tableName, rowObj, whereCol, whereVal],(err,results)=>{
            if(err) throw err;
            cb(results);
        });
    }
};

module.exports = orm;