const BooksModel = require("../../models/books");



bookService = {};

bookService.getBooks = async () => {
  const books = await BooksModel.find({});
  if (books) {

    return books;
  }
  console.log("Books Unavaiable");
  return [];
};

bookService.getBookDetails = async (bookId) => {
  try {
    const book = await BooksModel.findOne({ _id: bookId });
    if (book) {
      return book;
    }
    console.log(`Book with id:${bookId} not found`);
    return `Book with id:${bookId} not found`;
  } catch (e) {
    return `Internal server error ${e}`;
  }
};

bookService.updateBookDetails = async (bookId, details) => {
  const book = await BooksModel.findOneAndUpdate({ _id: bookId }, details);
  if (book) {
    return book;
  }
  console.log(`Book with id:${bookId} not found`);
  return `Book with id:${bookId} not found`;
};


bookService.deleteBook = async (bookId) => {
  const book = await BooksModel.deleteOne({ _id: bookId });
  if (book) {
    return `Book with id:${bookId} has been deleted successfully!`;
  }
  console.log(`Book with id:${bookId} not found`);
  return `Book with id:${bookId} not found`;
};


module.exports = bookService;