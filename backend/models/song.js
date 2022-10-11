'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Song extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Genre, {foreignKey: 'genre', as: 'genres'})
    }
  }
  Song.init({
    artist: DataTypes.STRING,
    song: DataTypes.STRING,
    genre: DataTypes.INTEGER,
    release: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Song',
  });
  return Song;
};