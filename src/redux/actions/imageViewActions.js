import { FETCHING_PHOTO, FETCHING_PHOTO_COMPLETED, FETCHING_PHOTO_ERROR, RESET_PHOTO_HAS_LOADED } from './actionTypes';

export const fetchingPhoto = () => ( {type: FETCHING_PHOTO} );
export const fetchingPhotoCompleted = ( image ) => ({type: FETCHING_PHOTO_COMPLETED, payload: image})
export const fetchingPhotoError = ( error ) => ( {type: FETCHING_PHOTO_ERROR, payload: error} );

export const resetPhotoHasLoaded = () => ( {type: RESET_PHOTO_HAS_LOADED} );
