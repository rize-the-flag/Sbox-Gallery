import React from 'react';

export const ImageCard = ( {urls, altDescription, likes, userName, profileLink, dateCreated} ) => {
  return (
    <figure className = 'card'>
      <img src = {urls.small} alt = {altDescription}/>
      <div>
        <a href = {profileLink}>{userName}</a>
        <time datetime = {dateCreated}>{dateCreated.toLocaleDateString()}</time>
        <button>Likes: {likes}</button>
      </div>
    </figure>
  );
};
