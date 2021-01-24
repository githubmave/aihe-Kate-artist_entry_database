import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {fetchArtists} from '../apis/artistsApi'
import {getArtists} from '../actions/index'

class Artists extends React.Component {

  componentDidMount () {
    fetchArtists()
    .then(artists => {
      this.props.dispatch(getArtists(artists))
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    return(
      <div className="artists">
        <ul>
          {this.props.artists.map(artist => (
            <li key={artist.id}>{artist.artist_name}</li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    artists: state.artists
  }
}

export default connect(mapStateToProps)(Artists)