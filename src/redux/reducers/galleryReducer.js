import {
  LOADING_COMPLETED,
  LOADING_IN_PROGRESS } from '../actions/galleryActions';

const initialState = {
  currentPage: 1,
  images: [],
  isLoading: false
};

export function galleryReducer( state = initialState, action ) {
  switch ( action.type ) {
    case LOADING_COMPLETED:
      return {
        images: [...state.images, ...action.images],
        currentPage: action.page,
        isLoading: false
      };
    case LOADING_IN_PROGRESS:
      return {
        ...state,
        isLoading: true
      }
  }
  return state;
}
