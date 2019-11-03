const mysql = require("mysql");

let connection;
if (process.env.JAWSDB_URL) {
    //setup connection to use JAWSDB instance on heroku
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
    //setup local connection
    connection = mysql.createConnection({
        user: process.env.LOCAL_DB_USER,
        password: process.env.LOCAL_DB_PASSWORD,
        port: process.env.LOCAL_DB_PORT,
        host: process.env.LOCAL_DB_HOST,
        database: process.env.LOCAL_DB_NAME
    });
};

connection.connect(err => {
    if (err) {
        console.error("Error connecting to db: " + err.stack);
        return;
    }
    console.log("Connected to db as id: " + connection.threadId);
});

module.exports = connection;