const express = require('express')

const db = require('../db/artist')

const router = express.Router()

router.get('/', (req, res) => {
  db.getArtists()
    .then(artists => {
      res.json(artists)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({message: 'Error. getArtists route has failed'})
    })
})

router.get('/songs', (req, res) => {
  db.getSongs()
    .then(songs => {
      res.json(songs)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({message: 'Error. getSongs route has failed'})
    })
})

module.exports = router