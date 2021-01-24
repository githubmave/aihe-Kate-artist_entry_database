import React from 'react'
import { connect } from 'react-redux'
import {HashRouter as Router, Route} from 'react-router-dom'

import { fetchFruits} from '../actions/index'
import Artists from './Artists'

export class App extends React.Component {
  state = {
    fruits: []
  }

  componentDidMount () {
    this.props.dispatch(fetchFruits())
  }

  render () {
    return (
      <Router>
      <div className='app'>
        <h1>Fullstack Boilerplate - with Fruits!</h1>
        <ul>
          {this.props.fruits.map(fruit => (
            <li key={fruit}>{fruit}</li>
          ))}
        </ul>
        <Artists />
      </div>
      </Router>
    )
  }
}

function mapStateToProps (state) {
  return {
    fruits: state.fruits,
  }
}

export default connect(mapStateToProps)(App)
