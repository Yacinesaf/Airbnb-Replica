import axios from 'axios'


const getLocations = (search) => {
  return axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${search}.json?autocomplete=true&types=place&access_token=pk.eyJ1IjoidHN1c2hpIiwiYSI6ImNrNW4yeXR1ZjE2NGszanBsZndhbnVkaGEifQ.I3SHntsPRBpIGUJcrQwZUA`)
    .then(res => {
      return res.data.features
    })
}

const getAdresses = (city) => {
  return axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?autocomplete=true&limit=10&types=address&access_token=pk.eyJ1IjoidHN1c2hpIiwiYSI6ImNrNW4yeXR1ZjE2NGszanBsZndhbnVkaGEifQ.I3SHntsPRBpIGUJcrQwZUA`)
    .then(res => {
      return res.data.features.map(x => x.center)
    })
}

const getCategoriesPhotos = () => {
  return axios.get('https://api.unsplash.com/photos/random?client_id=qeLswcEc5-He0IdtsRjuMiaslcpkfVgpO2jDNx5BTUA&query=nature&count=3')
    .then(res => {
      return res.data
    })

}

const getPhotos = () => {
  return axios.get('https://api.unsplash.com/photos/random?client_id=qeLswcEc5-He0IdtsRjuMiaslcpkfVgpO2jDNx5BTUA&query=House&count=20')
    .then(res => {
      return res.data
    })

}


export {
  getLocations,
  getCategoriesPhotos,
  getPhotos,
  getAdresses
}