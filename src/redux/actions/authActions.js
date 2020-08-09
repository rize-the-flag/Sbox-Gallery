import {
  AUTH_FAILURE,
  AUTH_SUCCESS } from './actionTypes';

export const authSuccess = ( userProfile ) => ( {
  type: AUTH_SUCCESS,
  payload: userProfile
} );

export const authFailure = (error) => ( {
  type: AUTH_FAILURE,
  payload: error.message
})
