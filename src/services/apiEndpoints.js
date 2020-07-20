import axios from 'axios'


const getLocations = (search) => {
  return axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${search}.json?autocomplete=true&access_token=pk.eyJ1IjoidHN1c2hpIiwiYSI6ImNrNW4yeXR1ZjE2NGszanBsZndhbnVkaGEifQ.I3SHntsPRBpIGUJcrQwZUA`)
    .then(res => {
      return res.data.features.map(x => x.place_name)
    })
}

export {
  getLocations,
}