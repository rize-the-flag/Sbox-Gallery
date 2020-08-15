import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { ImageViewContainer } from './ImageViewContainer';
import { ImageList } from '../components/ImageList';
import { useSelector } from 'react-redux';
import { usePrevious } from '../redux/hooks/usePrevious';

export const Gallery = () => {
  const currentPage = useSelector(state => state.gallery.currentPage);
  const prevPage = usePrevious(currentPage);
  return (
    <>
      <Route exact path="/" render={() => <ImageList prevPage = {prevPage}/>} />
      <Route path = '/preview/:id' render={() => <ImageViewContainer />}/>
    </>
  );
};

export default withRouter( Gallery );

