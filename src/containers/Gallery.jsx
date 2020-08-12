import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { ImageViewContainer } from './ImageViewContainer';
import { ImageList } from '../components/ImageList';
import { useFetchImagesOnScroll } from '../redux/hooks/useFetchImagesOnScroll';

export const Gallery = () => {

  const [images, isLoading, error] = useFetchImagesOnScroll();

  return (
    <>
      <Route exact path = '/'>
        <ImageList
          images = {images}
          isLoading = {isLoading}
          error = {error}
        />
      </Route>
      <Route path = '/preview/:imgId'>
        <ImageViewContainer/>
      </Route>
    </>
  );
};

export default withRouter( Gallery );

