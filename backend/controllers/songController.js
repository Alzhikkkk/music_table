const {Song} = require("../models");

const getSongs = async (req, res) => {
    const songs = await Song.findAll({include: ['genres']});
    return res.status(200).send(songs)
}

const createSong = async ({ artist, song, genre, release }) => {
    console.log(artist)
    return new Promise(async resolve => {
        const songs = await Song.create({
            artist,
            song,
            genre,
            release
        });
        resolve(songs)
    })
}

module.exports = {
    createSong,
    getSongs
}