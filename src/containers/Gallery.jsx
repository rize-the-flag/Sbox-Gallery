import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';

import { ImageCard } from '../components/ImageCard';
import { getImages } from '../redux/thunks/galleryThunks';
import { Loader } from '../components/Loader';
import { APP_GALLERY_COLUMNS_COUNT, APP_LOAD_IMAGE_COUNT } from '../constants';

export const Gallery = () => {
  const column1 = [];
  const column2 = [];
  const column3 = [];

  const dispatch = useDispatch();
  const images = useSelector(state=>state.gallery.images);
  const isLoading = useSelector(state=>state.gallery.isLoading);
  const currentPage = useSelector(state=>state.gallery.currentPage);

  useEffect( () => {
    dispatch(getImages( currentPage, APP_LOAD_IMAGE_COUNT ));
  }, [] );

  const items = images.map( ( item, index ) => {
    const {
      id,
      likes,
      liked_by_user: likedByUser,
      alt_description: altDescription,
      urls,
      user: {
        id: userId,
        username: userName
      }} = item;

    return (
      <ImageCard
        key = {id}
        userId = {userId}
        userName = {userName}
        urls = {urls}
        likes = {likes}
        likedByUser = {likedByUser}
        altDescription = {altDescription}
        index = {index}
      />
    );
  } );

  for ( let i = 0; i <= items.length - APP_GALLERY_COLUMNS_COUNT; i += APP_GALLERY_COLUMNS_COUNT ) {
    column1.push( items[i] );
    column2.push( items[i + 1] );
    column3.push( items[i + 2] );
  }

  return (
    <>
      <main className = "container">
        <div>{column1}</div>
        <div>{column2}</div>
        <div>{column3}</div>
      </main>
      <button onClick = {ev => dispatch(getImages( currentPage + 1, APP_LOAD_IMAGE_COUNT ))}>
        load more (just for testing)
      </button>
      {isLoading && <Loader/>}
    </>
  );
};
