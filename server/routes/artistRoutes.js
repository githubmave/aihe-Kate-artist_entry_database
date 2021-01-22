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
      res.status(500).json({message: 'Error. Please see console log'})
    })
})

module.exports = router