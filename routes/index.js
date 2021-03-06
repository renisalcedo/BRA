const express = require("express");
const router = express.Router();

router.use("/", require("./application.js"));
router.use("/user", require("./user.js"));
router.use("/form", require("./form.js"));
router.use("/profile", require("./profile.js"));

router.all("*", (req, res) => {
  res.status(400).send();
});

module.exports = router;
