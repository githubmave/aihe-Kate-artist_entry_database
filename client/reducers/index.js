import { combineReducers } from 'redux'

import fruits from './fruits'
import artists from './artistsReducer'

export default combineReducers({
  artists,
  fruits
})
