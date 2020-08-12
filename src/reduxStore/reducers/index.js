import { combineReducers } from 'redux'
import categoriesPhotos from './categoriesPhotos'
import resultsPhotos  from './resultsPhotos'


export default combineReducers({
  categoriesPhotos,
  resultsPhotos,
})