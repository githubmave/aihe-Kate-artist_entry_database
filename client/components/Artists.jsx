import React from 'react'
import {connect} from 'react-redux'
import {Route, Link} from 'react-router-dom'

import {fetchArtists} from '../apis/artistsApi'
import {getArtists} from '../actions/index'

import ArtistInfo from './ArtistInfo'

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
            <li key={artist.id}><Link to={`/artist/${artist.id}`}>{artist.artist_name}</Link></li>
          ))}
        </ul>
        <Route path='/artist/:id' render={(props) => (
          <ArtistInfo {...props} artists={this.props.artists}/> )} />
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