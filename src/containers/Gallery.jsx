import React, { useCallback, useRef } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { ImageViewContainer } from './ImageViewContainer';
import { ImageList } from '../components/ImageList';
import { getImages } from '../redux/thunks/galleryThunks';
import { APP_LOAD_IMAGE_COUNT } from '../constants';
import { useDispatch, useSelector } from 'react-redux';
import { getGalleryCurrentPage } from '../redux/selectors';


export const Gallery = () => {

  const currentPage = useSelector( getGalleryCurrentPage );
  const dispatch = useDispatch();
  const prevPage = useRef();

  const onNextPage = useCallback( () => {
    if (prevPage.current === currentPage) return;
    dispatch( getImages( currentPage, APP_LOAD_IMAGE_COUNT ) );
    prevPage.current = currentPage;
  }, [currentPage, dispatch] );

  return (
    <>
      <Route exact path = "/" render = {() => <ImageList onFetchNewImages = {onNextPage}/>}/>
      <Route path = '/preview/:id' render = {() => <ImageViewContainer/>}/>
    </>
  );
};

export default withRouter( Gallery );

