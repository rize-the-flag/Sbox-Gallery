import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ImageCard } from '../components/ImageCard';
import { getImages } from '../redux/thunks/galleryThunks';
import { Loader } from '../components/Loader';
import { APP_GALLERY_COLUMNS_COUNT, APP_LOAD_IMAGE_COUNT } from '../constants';

export const Gallery = () => {

  const dispatch = useDispatch();
  const images = useSelector( state => state.gallery.images );
  const isLoading = useSelector( state => state.gallery.isLoading );
  const currentPage = useSelector( state => state.gallery.currentPage );

  const loadMoreImages = () => {
    dispatch( getImages( currentPage + 1, APP_LOAD_IMAGE_COUNT ) );
  };

  useEffect( () => {
    loadMoreImages();
  }, [] );

  const items = images.map( ( item ) => {
    const {id} = item;
    return (
      <ImageCard
        key = {id}
        imageData = {item}
      />
    );
  } );

  return (
    <>
      <main className = 'container'>
        <div>{items.map( ( _, i, a ) => a[i * APP_GALLERY_COLUMNS_COUNT]).filter( e => e )}</div>
        <div>{items.map( ( _, i, a ) => a[i * APP_GALLERY_COLUMNS_COUNT + 1] ).filter( e => e )}</div>
        <div>{items.map( ( _, i, a ) => a[i * APP_GALLERY_COLUMNS_COUNT + 2] ).filter( e => e )}</div>
      </main>
      <button onClick = {loadMoreImages}>
        load more (just for testing)
      </button>
      {isLoading && <Loader/>}
    </>
  );
};
