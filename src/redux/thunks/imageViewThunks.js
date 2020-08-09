import apiInstance from '../../API/unsplashAPI';
import { fetchingPhoto, fetchingPhotoCompleted, fetchingPhotoError } from '../actions/imageViewActions';
import { toJson } from 'unsplash-js';

export const fetchPhoto = ( id ) => dispatch => {
  dispatch( fetchingPhoto() );
  apiInstance.photos.getPhoto( id )
    .then( toJson )
    .then( image => dispatch( fetchingPhotoCompleted( image ) ) )
    .catch( error => dispatch( fetchingPhotoError( error ) ) );
};
