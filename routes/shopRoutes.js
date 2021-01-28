const { request } = require("express");

const { getHomePage } = require("../controllers/shopController");
const { getAboutPage } = require("../controllers/shopController");
const express = require("express");

const router = express.Router();

router.get("/", getHomePage);
router.get("/about", getAboutPage);

module.exports = router;