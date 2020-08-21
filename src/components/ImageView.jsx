import React from 'react';
import { UserAvatar } from './UserAvatar';
import { ButtonLike } from './ButtonLike';
import { ButtonClose } from './ButtonClose';
import { DateTime } from './DateTime';

export const ImageView = ( {image, toggleLike, onClose} ) => {

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
    created_at: createdAt,
    alt_description: altDescription,
    likes,
    liked_by_user: likedByUser
  } = image;

  return (
    <div className = 'image-view'>
      <header className = 'image-view__top-panel'>
        <UserAvatar
          userName = {username}
          profileLink = {html}
          profileImage = {small}
        />
        <div className = 'controls'>
          <ButtonLike
            likesCount = {likes}
            onClick = {toggleLike}
            isLiked = {likedByUser}
          />
          <ButtonClose
            likesCount = {likes}
            onClick = {onClose}
          />
        </div>
      </header>
      <div className = 'image-wrapper'>
        <img
          src = {regular}
          alt = {altDescription}
        />
      </div>
      <DateTime
        date = {createdAt}
        locale = {'ru-RU'}
      />
    </div>
  );
};
