import React from 'react'
import { connect } from 'react-redux'

import { fetchFruits, getArtists } from '../actions/index'
import { fetchArtists } from '../apis/artistsApi'

export class App extends React.Component {
  state = {
    fruits: []
  }

  componentDidMount () {
    this.props.dispatch(fetchFruits())

    fetchArtists()
    .then(artists => {
      console.log(artists)
      this.props.dispatch(getArtists(artists))
    })
    .catch(err => {
      console.log(err)
    })
  }

  render () {
    console.log(this.props)
    return (
      <div className='app'>
        <h1>Fullstack Boilerplate - with Fruits!</h1>
        <ul>
          {this.props.fruits.map(fruit => (
            <li key={fruit}>{fruit}</li>
          ))}
        </ul>
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
  console.log(state)
  return {
    fruits: state.fruits,
    artists: state.artists
  }
}

export default connect(mapStateToProps)(App)
