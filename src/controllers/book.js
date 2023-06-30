const { bookService } = require("../services");

const createBook = (req, res) => {
  try {
    console.log(`Book created by user with role ${req.user.role}`);

    const newBook = bookService.createBook(req.params.bookId, req.body);
    res.json(newBook);
  } catch (err) {
    res.status(400).json({ action: "createBook", error: err.message });
  }
};

const getBook = (req, res) => {
  console.log(`Book found with id ${req.params.bookId}`);
  res.json({ id: req.params.bookId, name: "Lord of the rings" });
};

module.exports = { createBook, getBook };
