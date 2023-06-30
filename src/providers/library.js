const { Op } = require("sequelize");
const { Library, Book } = require("../models");

const createLibrary = async (Library) => {
  try {
    const newLibrary = await Library.create(library);
    return newlibrary;
  } catch (err) {
    console.error("Error when creating library", err);
    throw err;
  }
};

const getLibrary = async (libraryId) => {
  try {
    const library = await Library.findByPk(libraryId, { include: { all: true } });
    return library;
  } catch (err) {
    console.error("Error when fetching library", err);
    throw err;
  }
};

const getLibraryByCriteria = async (options) => {
  try {
    const library = await Library.findAll({
      where: {
        [Op.or]: [
          { firstName: options.firstName },
          { lastName: options.lastName },
        ],
      },
    });
    return library;
  } catch (err) {
    console.error("Error when fetching library", err);
    throw err;
  }
};

const validateLibrary = async (options) => {
  try {
    const library = await Library.findAll({
      where: {
        email: options.library,
        password: options.pass,
      },
    });
    if (library.length !== 0) {
      return library;
    }
    return false;
  } catch (err) {
    console.error("Error when validating library", err);
    return false;
  }
};

const createBook = async (libraryId, book) => {
  try {
    const newBook = await Book.create({ ...book, libraryId: libraryId });
    return newBook;
  } catch (err) {
    console.error("Error when creating Ticket", err);
    throw err;
  }
};

module.exports = { createBook, getLibrary, createLibrary, validateLibrary };
