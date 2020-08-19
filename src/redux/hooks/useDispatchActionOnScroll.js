import { useDispatch, useSelector } from 'react-redux';
import { useLayoutEffect } from 'react';
import { APP_SCROLL_LOADING_GAP } from '../../constants';
import { getGalleryError, getGalleryLoading } from '../selectors';


export const useDispatchActionOnScroll = ( action, scrollHandler ) => {
  const dispatch = useDispatch();
  const isLoading = useSelector( getGalleryLoading );
  const error = useSelector( getGalleryError );

  scrollHandler = scrollHandler ? scrollHandler : () => {
    const {offsetHeight} = document.body;
    const {scrollY, innerHeight} = window;
    if (isLoading || error) return null;
    if (( offsetHeight <= scrollY + innerHeight + APP_SCROLL_LOADING_GAP )) dispatch( action );
  };

  useLayoutEffect( () => {
    window.addEventListener( 'scroll', scrollHandler );
    return () => {
      window.removeEventListener( 'scroll', scrollHandler );
    };

  }, [isLoading, error] );

  return {isLoading, error};
};
