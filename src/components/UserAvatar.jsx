import React from 'react';
import classNames from 'classnames';

export const UserAvatar = ( {userName, profileLink, profileImage, classes = ''} ) => {
  const userAvatarClasses = classNames( {
                                          'avatar': true,
                                        }, classes );
  return (
    <a href = {profileLink} className = {userAvatarClasses} target = '_blank' rel='nofollow noopener'>
      <img
           src = {profileImage}
           alt = {userName}
      />
      <span>{userName}</span>
    </a>
  );
};

