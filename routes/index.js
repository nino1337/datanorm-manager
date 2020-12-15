const router = require("express").Router();
const appRoutes = require("./routes");

router.use("/api", appRoutes);
module.exports = router;
