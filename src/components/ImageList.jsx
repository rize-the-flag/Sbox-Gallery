import { ImageCard } from './ImageCard';
import { Loader } from './Loader';
import { Error } from './Error';
import { useDispatchActionOnScroll } from '../redux/hooks/useDispatchActionOnScroll';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getGalleryImagesMemo } from '../redux/selectors';
import { setNextPage } from '../redux/actions/galleryActions';


export const ImageList = ({onFetchNewImages}) => {
  const {isLoading, error} = useDispatchActionOnScroll( setNextPage() );
  const images = useSelector( getGalleryImagesMemo );

  useEffect( () => {
    onFetchNewImages();
  }, [onFetchNewImages] );

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
