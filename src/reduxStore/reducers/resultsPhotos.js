const initialState = {
  resultsPhotos: [],
  fetchingResultsPhotos: true,
}

export default function (state = initialState, action) {
  switch (action.type) {
    default: return state

    case 'SET_RESULTS_PHOTOS':
      return { ...state, resultsPhotos: action.payload }
    case 'SET_FETCHING_RESULTS_PHOTOS':
      return { ...state, fetchingResultsPhotos: action.payload }

  }
}