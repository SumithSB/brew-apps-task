const express = require("express");
const router = express.Router();
const authRouter = require("./authentication/controllers/auth")
const bookRouter = require("./books/controllers/books")

router.use("/auth", authRouter)
router.use("/book", bookRouter)


module.exports = router;