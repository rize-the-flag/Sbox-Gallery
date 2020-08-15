import { ImageCard } from './ImageCard';
import { Loader } from './Loader';
import { Error } from './Error';
import { useFetchImagesOnScroll } from '../redux/hooks/useFetchImagesOnScroll';
import React from 'react';

export const ImageList = ({prevPage}) => {
  const [images, isLoading, error] = useFetchImagesOnScroll(prevPage);

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
