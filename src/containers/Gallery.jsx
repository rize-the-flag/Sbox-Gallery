import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';

import { APP_LOAD_IMAGE_COUNT } from '../constants';
import { ImageCard } from '../components/ImageCard';
import { getImages, setLike, unsetLike } from '../redux/thunks/galleryThunks';
import { Loader } from '../components/Loader';
import { setPage } from '../redux/actions/galleryActions';
import { Error } from '../components/Error';
import { ImageViewContainer } from './ImageViewContainer';


export const Gallery = () => {

  const dispatch = useDispatch();
  const images = useSelector( state => state.gallery.images );
  const isLoading = useSelector( state => state.gallery.isLoading );
  const currentPage = useSelector( state => state.gallery.currentPage );
  const error = useSelector( state => state.gallery.error );

  const loadMoreImages = ( page ) => {
    dispatch( getImages( page, APP_LOAD_IMAGE_COUNT ) );
  };

  const toggleLike = ( id, isLiked ) => {
    isLiked
      ? dispatch( unsetLike( id ) )
      : dispatch( setLike( id ) );
  };

  useEffect( () => {
    loadMoreImages( currentPage );
  }, [currentPage] );

  useEffect( () => {

    const handleWindowScroll = ev => {
      const {offsetHeight} = document.body;
      const {scrollY, innerHeight} = window;

      if (isLoading || error) return null;
      if (( offsetHeight <= scrollY + innerHeight )) dispatch( setPage( currentPage + 1 ) );
    };

    window.addEventListener( 'scroll', handleWindowScroll );
    return () => {
      window.removeEventListener( 'scroll', handleWindowScroll );
    };

  }, [currentPage, isLoading, error] );

  const items = images.map( ( item ) => {
    const {id} = item;
    return (
      <ImageCard
        key = {id}
        id = {id}
        imageData = {item}
        handleBtnLikeClick = {toggleLike}
      /> );
  } );

  return (
    <>
      <Route path = '/'>
        <main className = 'container'>
          {items}
        </main>
      </Route>
      <Route path = '/preview/:imgId'>
        <ImageViewContainer
          handleBtnLikeClick = {toggleLike}
        />
      </Route>
      {isLoading && <Loader/>}
      {error && <Error msg = {error}/>}
    </>
  );
};

export default withRouter( Gallery );
