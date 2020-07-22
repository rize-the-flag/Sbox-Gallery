import { UnsplashAPI } from '../../API/unsplashAPI';
import { getLocalBearerToken } from '../../API/localStorageAPI';
import {
  fetchingImages,
  fetchingImagesCompleted,
  fetchingImagesError,
} from '../actions/galleryActions';


export const fetchImages = ( page, perPage ) => dispatch => {
  const apiInstance = new UnsplashAPI( {bearerToken: getLocalBearerToken()} );
  dispatch( fetchingImages() );
  apiInstance.getPhotos( page, perPage )
    .then( images => dispatch( fetchingImagesCompleted( {page, images} ) ) )
    .catch( error => dispatch( fetchingImagesError( error ) ) );
};
