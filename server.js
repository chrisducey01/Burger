require("dotenv").config();
const express = require("express");
const exphndlbrs = require("express-handlebars");
const PORT = process.env.PORT || 3000;
const app = express();


// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sets up rendering engine to be handlebars
app.engine('handlebars', exphndlbrs({ defaultLayout: "main" }));
app.set('view engine', 'handlebars');

// Import routes and give the server access to them.
const routes = require("./controllers/burgers_controller");
app.use(routes);

app.listen(PORT, () => {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});

