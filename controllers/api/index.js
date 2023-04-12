const router = require("express").Router();
const userRoutes = require("./userRoutes");
const postRoutes = require("./postRoutes");

// All of these routes are prefixed with '/api'
router.use("/users", userRoutes);
router.use("/posts", postRoutes);

module.exports = router;
