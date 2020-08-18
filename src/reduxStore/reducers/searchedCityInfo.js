const initialState = {
  cityName: '',
  cityCenter: null
}

export default function (state = initialState, action) {
  switch (action.type) {
    default: return state

    case 'SET_CITY_NAME':
      return { ...state, cityName: action.payload }
    case 'SET_CITY_CENTER':
      return { ...state, cityCenter: action.payload }

  }
}