import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhoto } from '../redux/thunks/imageViewThunks';
import { Loader } from '../components/Loader';
import { ImageView } from '../components/ImageView';
import { resetPhotoHasLoaded } from '../redux/actions/imageViewActions';
import { toggleLike } from '../redux/thunks/galleryThunks';


export const ImageViewContainer = () => {
  const dispatch = useDispatch();
  const {imgId: id} = useParams();

  const image = useSelector( state => state.imageView.image );
  const isLiked = useSelector( state => state.imageView.image.liked_by_user );
  const hasLoaded = useSelector( state => state.imageView.hasLoaded );

  useEffect( () => {
    dispatch( fetchPhoto( id ) );
    return () => {
      dispatch( resetPhotoHasLoaded() );
    };
  }, [id] );

  if (!hasLoaded) return <Loader/>;

  return (
    <ImageView
      image = {image}
      toggleLike = {ev => dispatch(toggleLike( id, isLiked ))}
    />
  );
};
