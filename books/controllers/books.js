const express = require("express");
const bookService = require("../services/books_service");
const responsemodel = require("../../models/response");
const BooksModel = require("../../models/books");


const router = express.Router();

router.post("/", async (req, res) => {
  const { title, author, summary } = req.body;
  const user = new BooksModel({ title, author, summary });
  user.save().then((response) => {
    res.status(200).send(responsemodel.model1({ bookId: response._id, message: "Book added successfully!" }, "SUCCESS"));
  }).catch((error) => {
    res.status(500).send(responsemodel.model1("Internal Server Error: " + err, "ERROR"));
  });
});

router.get("/", (req, res) => {
  bookService.getBooks().then((response) => {
    res.status(200).send(responsemodel.model1(response, "SUCCESS"));
  }).catch((error) => {
    console.log(error);
    res.status(500).send(responsemodel.model1("Internal Server Error: " + err, "ERROR"));
  });
});

router.get("/:bookId", (req, res) => {
  let bookId = req.params.bookId;

  bookService.getBookDetails(bookId).then((response) => {
    if (response) {
      res.status(200).send(responsemodel.model1(response, "SUCCESS"));
    } else {
      res.status(404).send(responsemodel.model1(`Book with id:${bookId} not found`, "FAILURE"));
    }

  }).catch((error) => {
    console.log(error);
    res.status(500).send(responsemodel.model1("Internal Server Error: " + err, "ERROR"));
  });
});


router.put("/:bookId", (req, res) => {
  let bookId = req.params.bookId;
  let details = req.body;

  bookService.updateBookDetails(bookId, details).then((response) => {
    if (response) {
      res.status(200).send(responsemodel.model1(response, "SUCCESS"));
    } else {
      res.status(404).send(responsemodel.model1(`Book with id:${bookId} not found`, "FAILURE"));
    }

  }).catch((error) => {
    console.log(error);
    res.status(500).send(responsemodel.model1("Internal Server Error: " + err, "ERROR"));
  });
});

router.delete("/:bookId", (req, res) => {
  let bookId = req.params.bookId;

  bookService.deleteBook(bookId).then((response) => {
    if (response) {
      res.status(200).send(responsemodel.model1(response, "SUCCESS"));
    } else {
      res.status(404).send(responsemodel.model1(`Book with id:${bookId} not found`, "FAILURE"));
    }

  }).catch((error) => {
    console.log(error);
    res.status(500).send(responsemodel.model1("Internal Server Error: " + err, "ERROR"));
  });
});

module.exports = router;
