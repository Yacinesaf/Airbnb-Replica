const initialState = {
  categoriesPhotos: [],
  fetchingPhotosCategories: true,
  categories: [
    {
      title: 'Online experiences',
      subs: 'Unique activities we can do togother, led by a world of hosts.'
    },
    {
      title: 'Your next gataway',
      subs: "Unplug or reconnect on atrip that's just a short drive away."
    },
    {
      title: 'Entire homes',
      subs: 'Comfrotable private places, with room for friends or family.'
    },
  ]
}

export default function (state = initialState, action) {
  switch (action.type) {
    default: return state

    case 'SET_CATEGORIES_PHOTOS':
      return { ...state, categoriesPhotos: action.payload }
    case 'SET_FETCHING_CATEGORIES_PHOTOS':
      return { ...state, fetchingPhotosCategories: action.payload }

  }
}