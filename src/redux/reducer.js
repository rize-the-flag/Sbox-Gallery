import { combineReducers } from 'redux'
import { galleryReducer } from './reducers/galleryReducer';
import { authReducer } from './reducers/authReducer';
import { imageViewReducer } from './reducers/imageViewReducer';

export default combineReducers({
    gallery: galleryReducer,
    auth: authReducer,
    imageView: imageViewReducer
  })
