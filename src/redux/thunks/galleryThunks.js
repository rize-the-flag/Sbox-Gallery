import apiInstance from '../../API/unsplashAPI';
import {
  fetchingImagesCompleted,
  fetchingImagesError,
  fetchingImagesInProgress } from '../actions/galleryActions';

export const getImages = (page, perPage) => dispatch => {
  dispatch( fetchingImagesInProgress() );
  apiInstance.getPhotos(page, perPage)
    .then(images => dispatch( fetchingImagesCompleted( page, images)))
    .catch(error => dispatch( fetchingImagesError( error.toString())));
}

