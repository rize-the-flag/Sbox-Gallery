export const LOADING_IN_PROGRESS = 'LOADING_IN_PROGRESS';
export const LOADING_COMPLETED = 'LOADING_COMPLETED';
export const LOADING_ERROR = 'LOADING_ERROR';

export const loadingCompleted = (page, images) => ({type: LOADING_COMPLETED, page, images});
export const loadingInProgress = () => ({type: LOADING_IN_PROGRESS});
export const loadingError = (error) => ({type: LOADING_ERROR, error});
