const express = require('express');
const { getGenres } = require('../controllers/genreController');
const router = express.Router();

router.get('/api/genres', getGenres)
module.exports = router