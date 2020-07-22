import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { ImageCard } from '../components/ImageCard';
import { getImages } from '../redux/thunks/galleryThunks';
import { Loader } from '../components/Loader';
import { APP_LOAD_IMAGE_COUNT } from '../constants';


const Gallery = ( {images, currentPage, isLoading, getImages, error} ) => {

  useEffect( () => {
    getImages( currentPage, APP_LOAD_IMAGE_COUNT );
  }, [] );

  const items = images.map( ( item ) => {
    return (
      <li key = {item.id}>
        <ImageCard
          urls = {item.urls}
          userId = {item.user.id}
          userName = {item.user.name}
          likes = {item.likes}
          likedByUser = {item.liked_by_user}
          altDescription = {item.alt_description}
        />
      </li>
    );
  } );

  return (

    <>
      { error && <h1>{error}</h1> }
      <ul className = "container">{items}</ul>
      <button
        onClick = {ev => getImages( ++currentPage, APP_LOAD_IMAGE_COUNT )}
      >
        load more (just for testing)
      </button>
      {isLoading && <Loader/>}
    </>
  );
};

const mapStateToProps = ( state ) => {
  return {
    images: state.gallery.images,
    currentPage: state.gallery.currentPage,
    isLoading: state.gallery.isLoading,
    error: state.gallery.error
  };
};

const mapDispatchToProps = {
  getImages
};

export default connect( mapStateToProps, mapDispatchToProps )( Gallery );
