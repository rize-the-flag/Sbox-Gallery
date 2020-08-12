import React from 'react';
import { Link } from 'react-router-dom';
import { DateTime } from './DateTime';
import { UserAvatar } from './UserAvatar';
import { ButtonLike } from './ButtonLike';
import { toggleLike } from '../redux/thunks/galleryThunks';
import { useDispatch } from 'react-redux';

export const ImageCard = ( {imageData} ) => {
  const dispatch = useDispatch();
  const {
    id,
    urls: {
      small,
    },
    user: {
      username,
      links: {
        html: profileLink,
      },
      profile_image: {
        small: profileImage
      }
    },
    created_at: createdAt,
    alt_description: altDescription,
    liked_by_user: likedByUser,
    likes,
  } = imageData;

  return (
    <figure className = 'card'>
      <Link to = {`/preview/${id}`}>
        <img src = {small} alt = {altDescription}/>
      </Link>
      <div className = 'card__overlay'>
        <div className = "card__panel-top">
          <UserAvatar
            userName = {username}
            profileLink = {profileLink}
            profileImage = {profileImage}
          />
          <ButtonLike
            likesCount = {likes}
            isLiked = {likedByUser}
            onClick = {() => dispatch( toggleLike( id, likedByUser ) )}
          />
        </div>
        <DateTime
          date = {createdAt}
          locale = 'ru-RU'
          classes = 'card__date-created'
        />
      </div>
    </figure>
  );
};
