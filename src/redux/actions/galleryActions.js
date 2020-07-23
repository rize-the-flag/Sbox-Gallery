export const FETCHING_IMAGES = 'GALLERY/LOADING_IN_PROGRESS';
export const FETCHING_COMPLETED = 'GALLERY/LOADING_COMPLETED';
export const FETCHING_ERROR = 'GALLERY/LOADING_ERROR';

export const fetchingCompleted = (page, images) => ({type: FETCHING_COMPLETED, page, images});
export const fetchingInProgress = () => ({type: FETCHING_IMAGES});
export const fetchingError = (error) => ({type: FETCHING_ERROR, error});
