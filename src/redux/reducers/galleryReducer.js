import {
  fetchingImages,
  fetchingImagesCompleted,
  fetchingImagesError,
} from '../actions/galleryActions';
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  currentPage: 1,
  images: [],
  isLoading: false,
  error: false
};


export const galleryReducer = createReducer(initialState, {
  [fetchingImages]: (state) => {
    state.isLoading = true;
  },
  [fetchingImagesCompleted]: (state, {payload}) => {
    state.images = [...state.images, ...payload.images];
  },
  [fetchingImagesError]: (state, {payload}) => {
    state.error = payload.error;
  }
})

