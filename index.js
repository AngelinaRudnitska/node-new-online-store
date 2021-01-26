const express = require("express");

const PORT = 8000; //host should have uniq name -> depends on developer
const shopRoutes = require("./routes/shopRoutes");
const app = express();

//Include shopRoutes
app.use(shopRoutes);

app.use("/about", (req, res, next) => {
    // console.log("Request =>", req)
    res.send("<h1>About</h1>")
})
app.use("/vacancies", (req, res, next) => {
    // console.log("Request =>", req)
    res.send("<h1>Vacancies</h1>")
})
app.use("/career", (req, res, next) => {
    // console.log("Request =>", req)
    res.send("<h1>Join our team!</h1>")
})
app.use("/contact", (req, res, next) => {
    // console.log("Request =>", req)
    res.send("<h1>Find us here!</h1>")
})
app.use("/resourses", (req, res, next) => {
    // console.log("Request =>", req)
    res.send("<h1>Resourses</h1>")
})
app.use("/", (req, res, next) => {
    // console.log("Request =>", req)
    res.send("<h1>Homepage</h1>")
})

app.listen(PORT, () => console.log(`Server running on the port ${PORT}`))
app.use(shopRoutes);