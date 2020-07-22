import { UnsplashAPI } from '../../API/unsplashAPI';
import { getLocalBearerToken } from '../../API/localStorageAPI';
import {
  loadingCompleted,
  loadingError,
  loadingInProgress } from '../actions/galleryActions';

export const getImages = (page, perPage) => dispatch => {
  const apiInstance = new UnsplashAPI({bearerToken: getLocalBearerToken()});
  dispatch( loadingInProgress() );
  apiInstance.getPhotos(page, perPage)
    .then(images => dispatch(loadingCompleted(page, images)))
    .catch(error => dispatch(loadingError(error.toString())));
}

