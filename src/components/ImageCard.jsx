import React from 'react';

export const ImageCard = ( {urls, user, created_at, likes, alt_description} ) => {
  return (
    <figure className = 'card'>
      <img src = {urls.small} alt = {alt_description}/>
      <div>
        <a href = {user.links.html}>{user.username}</a>
        <time dateTime = {created_at}>{new Date(created_at).toLocaleDateString()}</time>
        <button>Likes: {likes}</button>
      </div>
    </figure>
  );
};
