import { combineReducers } from 'redux'
import categoriesPhotos from './categoriesPhotos'
import resultsPhotos from './resultsPhotos'
import adressesCoordinates from './adressesCoordinates'

export default combineReducers({
  categoriesPhotos,
  resultsPhotos,
  adressesCoordinates,
})