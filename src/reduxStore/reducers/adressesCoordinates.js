const initialState = {
  coordinates: [],
  fetchingAdresses: true,
  cityName: '',
}

export default function (state = initialState, action) {
  switch (action.type) {
    default: return state

    case 'SET_COORDINATES':
      return { ...state, coordinates: action.payload }
    case 'SET_CITY_NAME':
      return { ...state, cityName: action.payload }
    case 'SET_FETCHING_ADRESSES':
      return { ...state, fetchingAdresses: action.payload }

  }
}