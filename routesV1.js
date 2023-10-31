const express = require("express");
const router = express.Router();
const bookRouter = require("./books/controllers/books")


router.use("/book", bookRouter)


module.exports = router;