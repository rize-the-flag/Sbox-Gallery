import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setPage } from '../actions/galleryActions';
import { getImages } from '../thunks/galleryThunks';
import { APP_LOAD_IMAGE_COUNT, APP_SCROLL_LOADING_GAP } from '../../constants';

export const useFetchImagesOnScroll = () => {
  const dispatch = useDispatch();
  const images = useSelector( state => state.gallery.images );
  const isLoading = useSelector( state => state.gallery.isLoading );
  const currentPage = useSelector( state => state.gallery.currentPage );
  const error = useSelector( state => state.gallery.error );

  const loadMoreImages = ( page ) => {
    dispatch( getImages( page, APP_LOAD_IMAGE_COUNT ) );
  };

  useEffect( () => {
    loadMoreImages( currentPage );
  }, [currentPage] );

  useEffect( () => {
    const handleWindowScroll = () => {
      const {offsetHeight} = document.body;
      const {scrollY, innerHeight} = window;
      if (isLoading || error) return null;
      if (( offsetHeight <= scrollY + innerHeight + APP_SCROLL_LOADING_GAP )) dispatch( setPage( currentPage + 1 ) );
    };

    window.addEventListener( 'scroll', handleWindowScroll );
    return () => {
      window.removeEventListener( 'scroll', handleWindowScroll );
    };

  }, [currentPage, isLoading, error] );

  return [images, isLoading, error];
}
