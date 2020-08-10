import React from 'react';
import { UserAvatar } from './UserAvatar';
import { ButtonLike } from './ButtonLike';
import { ButtonClose } from './ButtonClose';
import { DateTime } from './DateTime';

export const ImageView = ( {image, toggleLike} ) => {
  const {
    urls: {
      regular,
    },
    user: {
      username,
      links: {
        html
      },
      profile_image: {
        small
      }
    },
    created_at,
    alt_description,
    likes,
    liked_by_user
  } = image;

  return (
    <div className = 'overlay overlay--content-center'>
      <div className = 'image-view'>
        <div className = 'image-view__top-panel'>
          <UserAvatar
            userName = {username}
            profileLink = {html}
            profileImage = {small}
          />
          <div className = 'controls'>
            <ButtonLike
              likesCount = {likes}
              onClick = {toggleLike}
              isLiked = {liked_by_user}
            />
            <ButtonClose
              likesCount = {likes}
            />
          </div>
        </div>
        <div className = 'image-wrapper'>
          <img
            src = {regular}
            alt = {alt_description}
          />
        </div>
        <DateTime
          date = {created_at}
          locale = {'ru-RU'}
        />
      </div>
    </div>
  );
};
