const { libraryProvider } = require("../providers");


const createLibrary = async (library) => {
    return await libraryProvider.createLibrary(library);
  };
  
  const getLibrary = async (libraryId) => {
    const library = await libraryProvider.getLibrary(libraryId);
    if (library) {
      // Lógica de negocio
      console.log(library.firstName);
    }
    return library;
  };
  
  const validateLibrary = async (library, pass) => {
    const libraryFound = await libraryProvider.validateLibrary({ library, pass });
    return libraryFound;
  };
  
  const createBook = async (libraryId, book) => {
    const library = await libraryProvider.getLibrary(libraryId);
    if (library) {
      const newBook = await libraryProvider.createTicket(libraryId, book);
      return newBook;
    }
    return null;
  };
  
  module.exports = { createLibrary, getLibrary, createBook, validateLibrary };