import { combineReducers } from 'redux'
import { galleryReducer } from './reducers/galleryReducer';
import { authReducer } from './reducers/authReducer';

export default combineReducers({
    gallery: galleryReducer,
    auth: authReducer,
  })
