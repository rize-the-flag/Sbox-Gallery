import {
  FETCHING_IMAGES,
  FETCHING_IMAGES_COMPLETED,
  FETCHING_IMAGES_ERROR,
  SET_NEXT_PAGE,
  TOGGLE_PHOTO_LIKE,
} from './actionTypes';

export const fetchingImagesCompleted = ( page, images ) => ( {type: FETCHING_IMAGES_COMPLETED, payload: {page, images} } );
export const fetchingImagesInProgress = () => ( {type: FETCHING_IMAGES} );
export const fetchingImagesError = ( error ) => ( {type: FETCHING_IMAGES_ERROR, payload: error.message} );
export const setNextPage = () => ( {type: SET_NEXT_PAGE} );

export const togglePhotoLike = (payload) => ( {type: TOGGLE_PHOTO_LIKE, payload} );
