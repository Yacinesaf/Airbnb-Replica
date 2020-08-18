import { combineReducers } from 'redux'
import categoriesPhotos from './categoriesPhotos'
import resultsPhotos from './resultsPhotos'
import searchedCityInfo from './searchedCityInfo'

export default combineReducers({
  categoriesPhotos,
  resultsPhotos,
  searchedCityInfo,
})