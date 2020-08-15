import React, { useCallback, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhoto } from '../redux/thunks/imageViewThunks';
import { Loader } from '../components/Loader';
import { ImageView } from '../components/ImageView';
import { resetPhotoHasLoaded } from '../redux/actions/imageViewActions';
import { toggleLike } from '../redux/thunks/galleryThunks';
import { Overlay } from '../components/Overlay';


export const ImageViewContainer = () => {
  const dispatch = useDispatch();
  const {id} = useParams();
  const history = useHistory();

  const image = useSelector( state => state.imageView.image );
  const likedByUser = useSelector( state => state.imageView.image.liked_by_user );
  const hasLoaded = useSelector( state => state.imageView.hasLoaded );

  useEffect( () => {
    dispatch( fetchPhoto( id ) );
    return () => {
      dispatch( resetPhotoHasLoaded() );
    };
  }, [id] );

  const onLikeToggle = useCallback(() => dispatch(toggleLike(id, likedByUser)), [id, likedByUser])
  const closeHandler = useCallback(() => history.push('/'), [history]);

  if (!hasLoaded) return <Loader/>;
  return (
    <Overlay closeHandler = {closeHandler}>
      <ImageView
        image = {image}
        toggleLike = {onLikeToggle}
      />
    </Overlay>
  );
};
