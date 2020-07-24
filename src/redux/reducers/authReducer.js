import {
  AUTH_SUCCESS } from '../actions/actionTypes';

const initialState = {
  isAuthenticated: false,
  user: {}
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {...state, user: action.payload, isAuthenticated: true};
    default:
      return state;
  }
}
