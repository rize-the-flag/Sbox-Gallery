import Unsplash, { toJson } from 'unsplash-js';

import { getLocalBearerToken, setLocalBearerToken } from './localStorageAPI';

import {
  APP_LOAD_IMAGE_COUNT,
  APP_LOCAL_STORAGE_NAME,
  APP_START_FROM_PAGE,
  ERROR_RATE_LIMIT_REACHED,
  UNHANDLED_ERROR,
  UNSPLASH_ACCESS_TOKEN,
  UNSPLASH_CALLBACK_URL,
  UNSPLASH_SCOPE,
  UNSPLASH_SECRET_TOKEN,
} from '../constants';

export class UnsplashAPI extends Unsplash {
  constructor( options = {} ) {
    options.bearerToken = options.bearerToken || '';
    options.accessKey = options.accessKey || UNSPLASH_ACCESS_TOKEN;
    options.secret = options.secret || UNSPLASH_SECRET_TOKEN;
    options.callbackUrl = options.callbackUrl || UNSPLASH_CALLBACK_URL;
    super( options );
  }

  checkError( request ) {
    if (request.ok) return null;
    if (request.headers.get( 'X-RateLimit-remaining' ) === '0') return ERROR_RATE_LIMIT_REACHED;
    return UNHANDLED_ERROR;
  }

  async doAuth( code ) {
    const response = await this.auth.userAuthentication( code );
    const error = this.checkError( response );
    if (error) {
      throw new Error( response.status + ' ' + error );
    }
    const json = await toJson( response );
    this.auth.setBearerToken( json.access_token );
    setLocalBearerToken( APP_LOCAL_STORAGE_NAME, json.access_token );
    history.replaceState( null, '', UNSPLASH_CALLBACK_URL );
    return json.access_token;
  }

  async getCurrentUserProfile() {
    const response = await this.currentUser.profile();
    const error = this.checkError( response );
    if (error) {
      throw new Error( `${response.status} ${error} ` );
    }
    return await toJson( response );
  }

  async getPhotos(
    page = APP_START_FROM_PAGE,
    perPage = APP_LOAD_IMAGE_COUNT,
    orderBy = 'latest' ) {
    const response = await this.photos.listPhotos( page, perPage, orderBy );
    const error = this.checkError( response );
    if (error) {
      throw new Error( `${response.status} ${error} ` );
    }
    return await toJson( response );
  }

  getAuthenticationUrl( scope = UNSPLASH_SCOPE ) {
    return this.auth.getAuthenticationUrl( scope );
  }

  async authentication() {
    const queryParams = location.search.match( /\?code=(?<code>.+)/ );
    const localBearerToken = getLocalBearerToken();
    if (!localBearerToken) {
      if (!queryParams) {
        location.assign( this.getAuthenticationUrl() );
        return;
      }
      await this.doAuth( queryParams['groups']['code'] );
    }
    this.auth.setBearerToken( localBearerToken );
    return await this.getCurrentUserProfile();
  }
}

export default new UnsplashAPI();
