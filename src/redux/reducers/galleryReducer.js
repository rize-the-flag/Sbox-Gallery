import {
  FETCHING_IMAGES,
  FETCHING_IMAGES_COMPLETED,
  FETCHING_IMAGES_ERROR,
  SET_NEXT_PAGE,
  TOGGLE_PHOTO_LIKE
} from '../actions/actionTypes';

const initialState = {
  currentPage: 1,
  images: [],
  isLoading: false,
  error: null
};

export function galleryReducer( state = initialState, action ) {
  switch ( action.type ) {
    case SET_NEXT_PAGE:
      return {
        ...state,
        currentPage: action.page
      };
    case FETCHING_IMAGES_COMPLETED:
      return {
        ...state,
        images: [...state.images, ...action.images],
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
        error: action.payload,
        isLoading: false
      };
    case TOGGLE_PHOTO_LIKE:
      const imageIdxToUpdate = state.images.findIndex( image => image.id === action.payload.photo.id );
      const newImagesArray = [...state.images];
      newImagesArray[imageIdxToUpdate] = {...newImagesArray[imageIdxToUpdate], ...action.payload.photo};
      return {
        ...state,
        images: newImagesArray
      };
    default:
      return state;
  }
}
