import { getCategoriesPhotos, getPhotos } from '../services/apiEndpoints'

export const getPhotosCategories = () => dispatch => {
  dispatch({ type: 'SET_FETCHING_CATEGORIES_PHOTOS', payload: true })
  getCategoriesPhotos().then(res => {
    dispatch({ type: 'SET_CATEGORIES_PHOTOS', payload: res })
    dispatch({ type: 'SET_FETCHING_CATEGORIES_PHOTOS', payload: false })
  })
}
export const getResultsPhotos = () => dispatch => {
  dispatch({ type: 'SET_FETCHING_RESULTS_PHOTOS', payload: true })
  getPhotos().then(res => {
    dispatch({ type: 'SET_RESULTS_PHOTOS', payload: res })
    dispatch({ type: 'SET_FETCHING_RESULTS_PHOTOS', payload: false })
  })
}