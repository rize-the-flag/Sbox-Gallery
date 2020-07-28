import Unsplash, { toJson } from 'unsplash-js';

import {
  getLocalBearerToken,
  setLocalBearerToken
} from './localStorageAPI';

import {
  UNSPLASH_ACCESS_TOKEN,
  UNSPLASH_CALLBACK_URL,
  UNSPLASH_SECRET_TOKEN,
  UNSPLASH_SCOPE,
  APP_LOCAL_STORAGE_NAME,
  APP_START_FROM_PAGE,
  APP_LOAD_IMAGE_COUNT,
  ERROR_RATE_LIMIT_REACHED,
  UNHANDLED_ERROR,
} from '../constants';

export class UnsplashAPI extends Unsplash {
  constructor( options = {} ) {
    options.bearerToken = options.bearerToken || '';
    options.accessKey = options.accessKey || UNSPLASH_ACCESS_TOKEN;
    options.secret = options.secret || UNSPLASH_SECRET_TOKEN;
    options.callbackUrl = options.callbackUrl || UNSPLASH_CALLBACK_URL;
    super( options );
  }


  isAuthenticated() {
    const bearerToken = getLocalBearerToken();
    return !!bearerToken;
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
    return json.access_token;
  }

  async getCurrentUserProfile() {
    const response = await this.currentUser.profile();
    const error = this.checkError( response );
    if (error) {
      throw new Error( response.status + ' ' + error );
    }
    return await toJson( response );
  }

  async getPhotos(
    page = APP_START_FROM_PAGE,
    perPage = APP_LOAD_IMAGE_COUNT,
    orderBy = 'latest' ) {
    const response = await this.photos.listPhotos( page, perPage, orderBy );
    return await toJson( response );
  }

  getAuthenticationUrl( scope = UNSPLASH_SCOPE ) {
    return this.auth.getAuthenticationUrl( scope );
  }

  async authentication() {
    const queryParams = location.search.match( /\?code=(?<code>.+)/ );

    if (!this.isAuthenticated()) {
      if (!queryParams) {
        location.assign( this.getAuthenticationUrl() );
        return;
      }
      await this.doAuth( queryParams['groups']['code'] );
    }
    return await this.getCurrentUserProfile();
  }
}

export default new UnsplashAPI();
