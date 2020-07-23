import {
  AUTH_FAILURE,
  AUTH_SUCCESS } from '../actions/authActions';

const initialState = {
  isAuthenticated: false,
  user: {
    id: '',
    name: '',
    profileImage: {}
  }
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {...state, user: action.payload, isAuthenticated: true};
    case AUTH_FAILURE:
      return {...state, error: action.payload};
    default:
      return state;
  }
}
