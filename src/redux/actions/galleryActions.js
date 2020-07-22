import { createAction } from '@reduxjs/toolkit';

export const fetchingImages = createAction('FETCHING_IMAGES');
export const fetchingImagesCompleted = createAction('FETCHING_IMAGES_COMPLETED');
export const fetchingImagesError = createAction('FETCHING_IMAGES_ERROR');
