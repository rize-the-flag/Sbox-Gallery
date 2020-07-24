export const FETCHING_IMAGES = 'GALLERY/FETCHING_IMAGES';
export const FETCHING_COMPLETED = 'GALLERY/FETCHING_COMPLETED';
export const FETCHING_ERROR = 'GALLERY/FETCHING_ERROR';

export const fetchingCompleted = (page, images) => ({type: FETCHING_COMPLETED, page, images});
export const fetchingInProgress = () => ({type: FETCHING_IMAGES});
export const fetchingError = (error) => ({type: FETCHING_ERROR, error});
