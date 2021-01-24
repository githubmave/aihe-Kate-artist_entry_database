import React from 'react'

export default function ArtistInfo (props) {

  function findArtist () {
    return props.artists.find(artist => {
      return artist.id == props.match.params.id
    })
  }

  const artist = findArtist()

  return (
    <div>
      <h1>
        Hello!
          <div>
          <h2>{artist.artist_name}</h2>
          <p>Manager: {artist.manager}</p>
          <p>Music Example: <a href={artist.links}>Click here</a></p>
          </div>
      </h1>
    </div>
  )

}