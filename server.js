require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();

// Import routes and give the server access to them.
const routes = require("./controllers/burgers_controller");
app.use(routes);

app.listen(PORT, () => {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});

