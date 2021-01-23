import {GET_ARTISTS} from '../actions/index'

const initialState = []

const artistsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTISTS:
      return action.artists
    
    default:
      return state  
  }
}

export default artistsReducer