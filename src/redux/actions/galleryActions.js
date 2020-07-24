import {
  FETCHING_IMAGES,
  FETCHING_IMAGES_COMPLETED,
  FETCHING_IMAGES_ERROR } from './actionTypes';

export const fetchingImagesCompleted = (page, images) => ({type: FETCHING_IMAGES_COMPLETED, page, images});
export const fetchingImagesInProgress = () => ({type: FETCHING_IMAGES});
export const fetchingImagesError = (error) => ({type: FETCHING_IMAGES_ERROR, error});
