import React, { useEffect, useState } from 'react';
import { UnsplashAPI } from '../API/unsplashAPI';
import { getLocalBearerToken } from '../API/localStorageAPI';


export const withAuth = ( WrappedComponent ) => {

  return props => {

    const [userData, setUserData] = useState( {} );
    const [error, setError] = useState(false)

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
        .then(userData => setUserData(userData))
        .catch(error => setError(error));
    },[])

    return ( error
        ? <h1>{error.toString()}</h1>
        : <WrappedComponent userProfile = {userData} {...props}/>
    );
  };
};
