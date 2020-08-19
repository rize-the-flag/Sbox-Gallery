import {
  FETCHING_PHOTO,
  FETCHING_PHOTO_COMPLETED,
  FETCHING_PHOTO_ERROR,
  RESET_PHOTO_HAS_LOADED,
  TOGGLE_PHOTO_LIKE
} from '../actions/actionTypes';

const initialState = {
  image: {},
  error: null,
  isLoading: false,
  hasLoaded: false
};

export const imageViewReducer = ( state = initialState, action ) => {
  const {type, payload} = action;
  switch ( type ) {
    case FETCHING_PHOTO:
      return {
        ...state,
        hasLoaded: false
      };
    case FETCHING_PHOTO_COMPLETED:
      return {
        ...state,
        image: payload,
        hasLoaded: true
      };
    case FETCHING_PHOTO_ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload
      };
    case RESET_PHOTO_HAS_LOADED:
      return {
        ...state,
        hasLoaded: false
      };
    case TOGGLE_PHOTO_LIKE:
      const {likes, liked_by_user} = payload.photo;
      return {
        ...state,
        image: {...state.image, likes, liked_by_user}
      };
    default:
      return state;
  }
};
