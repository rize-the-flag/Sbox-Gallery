import Unsplash from 'unsplash-js';
import {
  UNSPLASH_ACCESS_TOKEN,
  UNSPLASH_SECRET_TOKEN,
  CALLBACK_URL} from './appConf';

export const unsplash = new Unsplash(
  {
    accessKey: UNSPLASH_ACCESS_TOKEN,
    secret: UNSPLASH_SECRET_TOKEN,
    callbackUrl: CALLBACK_URL,
  }
);


