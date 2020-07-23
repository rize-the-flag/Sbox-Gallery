import {
  FETCHING_COMPLETED,
  FETCHING_ERROR,
  FETCHING_IMAGES
} from '../actions/galleryActions';

const initialState = {
  currentPage: 1,
  images: [],
  isLoading: false,
  error: false
};

export function galleryReducer( state = initialState, action ) {
  switch ( action.type ) {
    case FETCHING_COMPLETED:
      return {
        images: [...state.images, ...action.images],
        currentPage: action.page,
        isLoading: false
      };
    case FETCHING_IMAGES:
      return {
        ...state,
        isLoading: true
      };
    case FETCHING_ERROR:
      return {
        ...state,
        error: action.error
      };
  }
  return state;
}
