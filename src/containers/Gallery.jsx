import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { Loader } from '../components/Loader';
import { Error } from '../components/Error';
import { ImageViewContainer } from './ImageViewContainer';
import { CardsList } from '../components/CardsList';
import { useFetchImagesOnScroll } from '../redux/hooks/useFetchImagesOnScroll';

export const Gallery = () => {

  const [images, isLoading, error] = useFetchImagesOnScroll();

  return (
    <>
      <Route exact path = '/'>
        <main>
          <CardsList images={images} />
        </main>
      </Route>
      <Route path = '/preview/:imgId'>
        <ImageViewContainer />
      </Route>
      {isLoading && <Loader/>}
      {error && <Error msg = {error}/>}
    </>
  );
};

export default withRouter( Gallery );
