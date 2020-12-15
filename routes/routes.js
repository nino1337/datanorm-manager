const express = require("express");

const router = express.Router();
const controller = require("../controller");

router.get("/datanorm", controller.getDatanorm);
router.post("/datanorm", controller.createDatanorm);
router.delete("/datanorm", controller.deleteDatanorm);

module.exports = router;
