import { createSelector } from 'reselect';

//gallery selectors
export const getGallery = ( state ) => state.gallery;
export const getGalleryImages = ( state ) => getGallery( state ).images;
export const getGalleryLoading = ( state ) => getGallery( state ).isLoading;
export const getGalleryError = ( state ) => getGallery( state ).error;
export const getGalleryCurrentPage = ( state ) => getGallery( state ).currentPage;
export const getGalleryImagesMemo = createSelector( getGalleryImages, images => images);


//image view selectors
export const getImageView = ( state ) => state.imageView;
export const getImageViewImage = ( state ) => getImageView( state ).image;
export const getImageViewLikeState = ( state ) => getImageView( state ).liked_by_user;
export const getImageViewLoadingState = ( state ) => getImageView( state ).hasLoaded;



