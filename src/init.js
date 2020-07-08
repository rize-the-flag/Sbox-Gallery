import { unsplash } from './unsplash';
import { toJson } from 'unsplash-js';
import {
  APP_LOCAL_STORAGE_NAME,
  USNPLASH_SCOPE
} from './appConf';

export async function init() {
  const matches = location.search.match( /^\?code=(?<code>.+)$/ );
  const appStorageItem = JSON.parse( localStorage.getItem( APP_LOCAL_STORAGE_NAME ) );
  const bearerToken = appStorageItem ? appStorageItem['auth']['bearerToken'] : '';

  if (bearerToken) {
    return await getCurrentUserProfile( bearerToken );
  }

  if (!matches) {
    const authUrl = unsplash.auth.getAuthenticationUrl( USNPLASH_SCOPE );
    location.assign( authUrl );
  }

  const json = await doAuth( matches.groups['code'] );

  localStorage.setItem(
    APP_LOCAL_STORAGE_NAME,
    JSON.stringify( {
                      auth: {
                        bearerToken: json.access_token
                      }
                    } )
  );

  return await getCurrentUserProfile( json.access_token );
}

export async function doAuth( code ) {
  const request = await unsplash.auth.userAuthentication( code );
  if (!request.ok) {
    throw new Error( request.status );
  }
  return await toJson( request );
}

async function getCurrentUserProfile( bearerToken ) {
  unsplash.auth.setBearerToken( bearerToken );
  const respone = await unsplash.currentUser.profile();
  return await toJson( respone );
}

