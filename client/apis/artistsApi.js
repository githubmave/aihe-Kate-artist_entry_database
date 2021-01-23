import request from 'superagent'

const rootUrl = '/api/v1'

export function fetchArtists () {
  return request
    .get(`${rootUrl}/artists`)
    .then(res => res.body)
}