import { UnsplashAPI } from './API/unsplashAPI';
import {
  APP_LOCAL_STORAGE_NAME,
} from './appConf';

export async function init() {
  const unsplashApiInstance = new UnsplashAPI();
  const matches = location.search.match( /^\?code=(?<code>.+)$/ );
  const appStorageItem = JSON.parse( localStorage.getItem( APP_LOCAL_STORAGE_NAME ) );
  const bearerToken = appStorageItem ? appStorageItem['auth']['bearerToken'] : '';

  if (bearerToken) {
    return await unsplashApiInstance.getCurrentUserProfile(bearerToken);
  }

  if (!matches) {
    const authUrl = unsplashApiInstance.getAuthenticationUrl();
    location.assign( authUrl );
  }

  const json = await unsplashApiInstance.doAuth( matches['groups']['code'] );

  localStorage.setItem(
    APP_LOCAL_STORAGE_NAME,
    JSON.stringify( {
                      auth: {
                        bearerToken: json.access_token
                      }
                    } )
  );

  return await unsplashApiInstance.getCurrentUserProfile( json.access_token );
}
