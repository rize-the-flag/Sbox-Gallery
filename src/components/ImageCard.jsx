import React from 'react';

export const ImageCard = ( {imageData} ) => {
 const  {
    urls, user, created_at, likes, alt_description
  }  = imageData;

 const {
   username, links:{html}
 } = user;

  return (
    <figure className = 'card'>
      <img src = {urls.small} alt = {alt_description}/>
      <div>
        <a href = {html}>{username}</a>
        <time dateTime = {created_at}>{new Date( created_at ).toLocaleDateString()}</time>
        <button>Likes: {likes}</button>
      </div>
    </figure>
  );
};
