const { libraryService } = require("../services");

const createLibrary = (req, res) => {
  try {
    console.log(`Book created by user with role ${req.user.role}`);

    const newLibrary = libraryService.createLibrary(req.params.LibraryId, req.body);
    res.json(newLibrary);
  } catch (err) {
    res.status(400).json({ action: "createLibrary", error: err.message });
  }
};

const getLibrary = async (req, res) => {
    try {
      const library = await libraryService.getLibrary(req.params.libraryId);
      if (!library) {
        res.status(404).json({ action: "getLibrary", error: "Library Not Found" });
      } else {
        console.log(`Book found with id ${req.params.libraryId}`);
        res.json({ id: req.params.libraryId, name: "Villa Allende" });
      }
    } catch (err) {
      res.status(500).json({ action: "getLibrary", error: err.message });
    }
  };
  const createBook = async (req, res) => {
    try {
      const library = await libraryService.createBook(req.params.libraryId, req.body);
      if (!library) {
        res.status(404).json({ action: "createBook", error: "Library Not Found" });
      } else {
        res.json(library);
      }
    } catch (err) {
      res.status(500).json({ action: "createBook", error: err.message });
    }
  };

module.exports = { createLibrary, getLibrary, createBook };
