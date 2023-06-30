const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db-config");
const Book = require("./book.js");

const Library = sequelize.define("Library", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefono:{
    type: DataTypes.STRING,
    allowNull: false,
  },
});


Library.hasMany(Book);
Book.belongsTo(Library);


module.exports = Library;
