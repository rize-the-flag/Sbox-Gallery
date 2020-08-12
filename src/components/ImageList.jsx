import { ImageCard } from './ImageCard';
import React from 'react';
import { Loader } from './Loader';
import { Error } from './Error';

export const ImageList = ( {images, isLoading, error} ) => {

  const items = images.map( ( item ) => {
    const {id} = item;
    return (
      <li key = {id}>
        <ImageCard
          imageData = {item}
        />
      </li> );
  } );

  return (
    <main>
      <ul className = 'container'>
        {items}
      </ul>
      {isLoading && <Loader/>}
      {error && <Error msg = {error}/>}
    </main>
  );
};
