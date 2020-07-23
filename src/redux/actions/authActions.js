export const AUTH_SUCCESS = 'AUTH/AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH/AUTH_FAILURE';

export const authSuccess = ( id, name, profileImage ) => ( {
  type: AUTH_SUCCESS,
  payload: {id, name, profileImage}
} );
export const authFailure = ( error ) => ( {type: AUTH_FAILURE, payload: error} );
