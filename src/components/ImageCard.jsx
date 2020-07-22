import React from 'react';

export const ImageCard = ( {urls, altDescription, likes, userName} ) => {
  return (
    <div className = "card">
      <img src = {urls.thumb} alt = {altDescription}/>
      <div>
        <i>User: {userName} </i>
        <button>Likes: {likes}</button>
      </div>
    </div>
  );
};
