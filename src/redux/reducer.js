import { combineReducers } from 'redux'
import { galleryReducer } from './reducers/galleryReducer';

export default combineReducers({
    gallery: galleryReducer,
  })
