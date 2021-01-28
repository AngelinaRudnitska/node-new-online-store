const express = require("express");

const path = require("path");



// Include shop routes

const shopRoutes = require("./routes/shopRoutes");



const PORT = 8000;

const app = express();



app.set("view engine", "ejs");

app.set("views", "views");

app.use(express.static(path.join(__dirname, "static")));




// Use Middleware

app.use(shopRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}​​`));

