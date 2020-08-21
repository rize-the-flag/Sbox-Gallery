import React, { useCallback, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhoto } from '../redux/thunks/imageViewThunks';
import { Loader } from '../components/Loader';
import { ImageView } from '../components/ImageView';
import { resetPhotoHasLoaded } from '../redux/actions/imageViewActions';
import { toggleLike } from '../redux/thunks/galleryThunks';
import { Overlay } from '../components/Overlay';
import { getImageViewImage, getImageViewLikeState, getImageViewLoadingState } from '../redux/selectors';


export const ImageViewContainer = () => {
  const dispatch = useDispatch();
  const {id} = useParams();
  const history = useHistory();

  const image = useSelector( getImageViewImage );
  const likedByUser = useSelector( getImageViewLikeState );
  const hasLoaded = useSelector( getImageViewLoadingState );

  useEffect( () => {
    dispatch( fetchPhoto( id ) );
    return () => {
      dispatch( resetPhotoHasLoaded() );
    };
  }, [id] );

  const onLikeToggle = useCallback( () => dispatch( toggleLike( id, likedByUser ) ), [id, likedByUser] );
  const closeHandler = useCallback( () => history.goBack(), [history] );

  if (!hasLoaded) return <Loader/>;
  return (
    <Overlay closeHandler = {closeHandler}>
      <ImageView
        image = {image}
        toggleLike = {onLikeToggle}
        onClose = {closeHandler}
      />
    </Overlay>
  );
};
