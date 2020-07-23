export const AUTH_SUCCESS = 'AUTH/AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH/AUTH_FAILURE'

export const authSuccess = (username, id) => ({type: AUTH_SUCCESS, payload: {username, id} });
export const authFailure = (error) => ({type: AUTH_FAILURE, payload: error});
