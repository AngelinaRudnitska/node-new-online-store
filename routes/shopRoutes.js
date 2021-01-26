const { request } = require("express");

const express = require("express");

const router = express.Router();

router.get("/about", (req, res, next) => {
    // console.log("Request =>", req)
    res.send("<h1>About</h1>")
})
router.get("/vacancies", (req, res, next) => {
    // console.log("Request =>", req)
    res.send("<h1>Vacancies</h1>")
})
router.get("/career", (req, res, next) => {
    // console.log("Request =>", req)
    res.send("<h1>Join our team!</h1>")
})
router.get("/contact", (req, res, next) => {
    // console.log("Request =>", req)
    res.send("<h1>Find us here!</h1>")
})
router.get("/resourses", (req, res, next) => {
    // console.log("Request =>", req)
    res.send("<h1>Resourses</h1>")
})
router.get("/", (req, res, next) => {
    // console.log("Request =>", req)
    res.send("<h1>Homepage</h1>")
})

module.exports = router;