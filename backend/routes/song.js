const express = require('express');
const { getSongs, createSong } = require('../controllers/songController');
const router = express.Router();

router.post('/api/songs', async(req, res)=> {
    try{
        console.log(req.body)
         const song = await createSong(req.body.artist)
         res.status(200).send(song);
    }catch(error){
        res.status(400).send(error);
    }
})

router.get('/api/songs', getSongs)
module.exports = router