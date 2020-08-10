import React from 'react';
import { Link } from 'react-router-dom';
import { DateTime } from './DateTime';
import { UserAvatar } from './UserAvatar';
import { ButtonLike } from './ButtonLike';
import { toggleLike } from '../redux/thunks/galleryThunks';
import { useDispatch } from 'react-redux';

export const ImageCard = ( {id, imageData} ) => {
  const dispatch = useDispatch();
  const {
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
    }, created_at, likes, alt_description, liked_by_user
  } = imageData;

  return (
    <figure className = 'card'>
      <Link to = {`/preview/${id}`}>
        <img src = {small} alt = {alt_description}/>
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
              isLiked = {liked_by_user}
              onClick = {() => dispatch(toggleLike(id, liked_by_user))}
            />
          </div>
          <DateTime
            date = {created_at}
            locale = 'ru-RU'
            classes = 'card__date-created'
          />
        </div>
    </figure>
);
};
