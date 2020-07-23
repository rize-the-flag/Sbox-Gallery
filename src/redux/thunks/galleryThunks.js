import { UnsplashAPI } from '../../API/unsplashAPI';
import { getLocalBearerToken } from '../../API/localStorageAPI';
import {
  fetchingCompleted,
  fetchingError,
  fetchingInProgress } from '../actions/galleryActions';

export const getImages = (page, perPage) => dispatch => {
  const apiInstance = new UnsplashAPI({bearerToken: getLocalBearerToken()});
  dispatch( fetchingInProgress() );
  apiInstance.getPhotos(page, perPage)
    .then(images => dispatch( fetchingCompleted( page, images)))
    .catch(error => dispatch( fetchingError( error.toString())));
}

