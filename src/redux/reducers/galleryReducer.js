import {
  FETCHING_IMAGES_COMPLETED,
  FETCHING_IMAGES_ERROR,
  FETCHING_IMAGES
} from '../actions/actionTypes';

const initialState = {
  currentPage: 0,
  images: [],
  isLoading: false,
  error: null
};

export function galleryReducer( state = initialState, action ) {
  switch ( action.type ) {
    case FETCHING_IMAGES_COMPLETED:
      return {
        ...state,
        images: [...state.images, ...action.images],
        currentPage: action.page,
        isLoading: false
      };
    case FETCHING_IMAGES:
      return {
        ...state,
        isLoading: true
      };
    case FETCHING_IMAGES_ERROR:
      return {
        ...state,
        error: action.error
      };
  }
  return state;
}
