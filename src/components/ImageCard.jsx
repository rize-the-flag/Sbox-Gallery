import React from 'react';

export const ImageCard = ( {urls, altDescription, likes, userName} ) => {
  return (
    <figure className = 'card'>
      <img src = {urls.small} alt = {altDescription}/>
      <div>
        <i>User: {userName} </i>
        <button>Likes: {likes}</button>
      </div>
    </figure>
  );
};
