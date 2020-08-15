import { ImageCard } from './ImageCard';
import { Loader } from './Loader';
import { Error } from './Error';
import { useFetchImagesOnScroll } from '../redux/hooks/useFetchImagesOnScroll';
import React, { useEffect } from 'react';
import { setPage } from '../redux/actions/galleryActions';
import { useDispatch, useSelector } from 'react-redux';

export const ImageList = ({prevPage}) => {
  const currentPage = useSelector( state => state.gallery.currentPage );
  const dispatch = useDispatch();
  const [images, isLoading, error] = useFetchImagesOnScroll(prevPage, currentPage);

  // fetch data on app init
  useEffect (() => {
    if (currentPage === 0) dispatch(setPage( currentPage + 1));
  }, [])

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
