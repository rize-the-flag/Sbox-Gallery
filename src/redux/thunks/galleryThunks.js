import apiInstance from '../../API/unsplashAPI';
import {
  fetchingImagesCompleted,
  fetchingImagesError,
  fetchingImagesInProgress,
  togglePhotoLike
} from '../actions/galleryActions';
import { toJson } from 'unsplash-js';

export const getImages = (page, perPage) => dispatch => {
  dispatch( fetchingImagesInProgress() );
  apiInstance.getPhotos(page, perPage)
    .then(images => dispatch( fetchingImagesCompleted( page, images)))
    .catch(error => dispatch( fetchingImagesError( error )));
}

export const setLike = (id) => dispatch => {
  apiInstance.photos.likePhoto(id)
    .then(toJson)
    .then(json => dispatch( togglePhotoLike( json)))
}

export const unsetLike = (id) => dispatch => {
  apiInstance.photos.unlikePhoto(id)
    .then(toJson)
    .then(json => dispatch(togglePhotoLike(json)))
}

export const toggleLike = (id, isLiked) => dispatch => {
  isLiked
    ? dispatch( unsetLike( id ) )
    : dispatch( setLike( id ) );
}
