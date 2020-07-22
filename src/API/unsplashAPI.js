import Unsplash, { toJson } from 'unsplash-js';

import { getLocalBearerToken, setLocalBearerToken } from './localStorageAPI';

import {
  UNSPLASH_ACCESS_TOKEN,
  UNSPLASH_CALLBACK_URL,
  UNSPLASH_SECRET_TOKEN,
  UNSPLASH_SCOPE,
  APP_LOCAL_STORAGE_NAME,
} from '../constants';


export class UnsplashAPI extends Unsplash {
  constructor( options = {}) {
    options.bearerToken = options.bearerToken || '';
    options.accessKey = options.accessKey || UNSPLASH_ACCESS_TOKEN;
    options.secret = options.secret || UNSPLASH_SECRET_TOKEN;
    options.callbackUrl = options.callbackUrl || UNSPLASH_CALLBACK_URL;

    super( options );
  }

  async doAuth( code ) {
    const request = await this.auth.userAuthentication( code );
    if (!request.ok) {
      throw new Error( request.status );
    }
    const json = await toJson( request );
    setLocalBearerToken( APP_LOCAL_STORAGE_NAME, json.access_token );
    return json.access_token;
  }

  isAuthenticated() {
    const bearerToken = getLocalBearerToken();
    return !!bearerToken;
  }

  async getCurrentUserProfile( bearerToken ) {
    this.auth.setBearerToken( bearerToken );
    const request = await this.currentUser.profile();
    if (!request.ok) {
      throw new Error( request.status );
    }
    return await toJson( request );
  }

  async getPhotos(page = 1, perPage = 10, orderBy = 'latest') {
    const response = await this.photos.listPhotos(page, perPage);
    return await toJson( response );
  }

  getAuthenticationUrl( scope = UNSPLASH_SCOPE ) {
    return this.auth.getAuthenticationUrl( scope );
  }
}



