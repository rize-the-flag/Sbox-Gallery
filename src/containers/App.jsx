import React, { useEffect } from 'react';
import { Gallery } from './Gallery';
import { useDispatch } from 'react-redux';
import { authSuccess } from '../redux/actions/authActions';

export const App = ({userProfile}) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authSuccess(userProfile));
  }, [])


  return (
     <Gallery />
  );
};
