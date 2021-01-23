import { getFruits } from '../apis/fruits'

export const SET_FRUITS = 'SET_FRUITS'
export const GET_ARTISTS = 'GET_ARTISTS'

export const getArtists = (artists) => {
  console.log(artists)
  return {
    type: GET_ARTISTS,
    artists
  }
}

export function setFruits (fruits) {
  return {
    type: SET_FRUITS,
    fruits
  }
}

export function fetchFruits () {
  return dispatch => {
    return getFruits()
      .then(fruits => {
        dispatch(setFruits(fruits))
        return null
      })
  }
}
