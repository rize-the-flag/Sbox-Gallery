import { APP_LOCAL_STORAGE_NAME } from '../constants';


export function getLocalBearerToken( appStorageName = APP_LOCAL_STORAGE_NAME ) {
  const appStoreItem = localStorage.getItem( appStorageName );
  if (!appStoreItem) return undefined;
  return JSON.parse( appStoreItem )['auth']['bearerToken'];
}

export function setLocalBearerToken( appStorageName = APP_LOCAL_STORAGE_NAME, bearerToken = '' ) {
  localStorage.setItem( appStorageName, JSON.stringify( {auth: {bearerToken}} ) );
}

