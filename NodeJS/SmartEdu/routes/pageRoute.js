const express = require("express");
const pageController = require("../controllers/pageController");
const redirectMiddleware = require("../middlewares/redirecctMiddleware");

const router = express.Router();

router.route("/").get(pageController.getIndexPage);
router.route("/about").get(pageController.getAboutPage);
router.route("/register").get(redirectMiddleware, pageController.getRegisterPage);
router.route("/login").get(redirectMiddleware, pageController.getLoginPage);

module.exports = router;
