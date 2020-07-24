import React, { useEffect } from 'react';
import { Gallery } from './Gallery';
import { Loader } from '../components/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { UnsplashAPI } from '../API/unsplashAPI';
import { getLocalBearerToken } from '../API/localStorageAPI';
import { authFailure, authSuccess } from '../redux/actions/authActions';

export const App = () => {

  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state=>state.auth.isAuthenticated);
  const error = useSelector(state=>state.auth.error);

  async function authentication() {
    const queryParams = location.search.match( /\?code=(?<code>.+)/ );
    const apiInstance = new UnsplashAPI();

    if (!apiInstance.isAuthenticated()) {
      if (!queryParams) {
        location.assign( apiInstance.getAuthenticationUrl() );
        return;
      }
      await apiInstance.doAuth( queryParams['groups']['code'] );
    }
    return await apiInstance.getCurrentUserProfile( getLocalBearerToken() );
  }

  useEffect(()=>{
    authentication()
      .then( ({id, name, profile_image: profileImage}) => dispatch(authSuccess(id, name, profileImage)))
      .catch(error => dispatch(authFailure(error.toString())));
  },[])

  return (
    error
      ? <p>{error}</p>
      : isAuthenticated
          ? <Gallery/>
          : <Loader />
  );
};
