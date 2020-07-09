import Unsplash, { toJson } from 'unsplash-js';

import {
  UNSPLASH_ACCESS_TOKEN,
  UNSPLASH_CALLBACK_URL,
  UNSPLASH_SECRET_TOKEN,
  USNPLASH_SCOPE
} from './configUnsplash';

export class UnsplashAPI extends Unsplash {
  constructor( options = {
      bearerToken: '',
      accessKey: UNSPLASH_ACCESS_TOKEN,
      secret: UNSPLASH_SECRET_TOKEN,
      callbackUrl: UNSPLASH_CALLBACK_URL,
    }) {
    super( options );
  }

  async doAuth( code ) {
    const request = await this.auth.userAuthentication( code );
    if (!request.ok) {
      throw new Error( request.status );
    }
    return await toJson( request );
  }

  async getCurrentUserProfile( bearerToken ) {
    this.auth.setBearerToken( bearerToken );
    const request = await this.currentUser.profile();
    if (!request.ok) {
      throw new Error( request.status );
    }
    return await toJson( request );
  }

  getAuthenticationUrl(scope = USNPLASH_SCOPE) {
    return this.auth.getAuthenticationUrl( scope );
  }
}




