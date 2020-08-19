import {
  FETCHING_IMAGES,
  FETCHING_IMAGES_COMPLETED,
  FETCHING_IMAGES_ERROR,
  SET_NEXT_PAGE,
  TOGGLE_PHOTO_LIKE,
} from '../actions/actionTypes';

const initialState = {
  currentPage: 1,
  images: [],
  isLoading: false,
  error: null,
};

export function galleryReducer( state = initialState, action ) {
  const {type, payload} = action;

  switch ( type ) {
    case SET_NEXT_PAGE:
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };
    case FETCHING_IMAGES_COMPLETED:
      return {
        ...state,
        images: [...state.images, ...payload.images],
        isLoading: false,
      };
    case FETCHING_IMAGES:
      return {
        ...state,
        isLoading: true
      };
    case FETCHING_IMAGES_ERROR:
      return {
        ...state,
        error: payload.payload,
        isLoading: false
      };
    case TOGGLE_PHOTO_LIKE:
      const imageIdxToUpdate = state.images.findIndex( image => image.id === payload.photo.id );
      const newImagesArray = [...state.images];
      newImagesArray[imageIdxToUpdate] = {...newImagesArray[imageIdxToUpdate], ...payload.photo};
      return {
        ...state,
        images: newImagesArray
      };
    default:
      return state;
  }
}
