const {Genre} = require("../models");

const getGenres = async (req, res) => {
    const genres = await Genre.findAll();
    return res.status(200).send(genres)
}

module.exports = {
    getGenres
}