const connection = require('./connection')

function getArtists (db = connection) {
  return db('artist_data').select()
}

function getSongs (db = connection) {
  return db('song_data').select()
}

function getSongwriters (db = connection) {
  return db('songwriter_data').select()
}

module.exports = {
  getArtists,
  getSongs,
  getSongwriters
}