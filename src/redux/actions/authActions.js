import { AUTH_SUCCESS } from './actionTypes';

export const authSuccess = ( userProfile ) => ( {
  type: AUTH_SUCCESS,
  payload: userProfile
} );

