import { ImageCard } from './ImageCard';
import React from 'react';

export const CardsList = ({images}) => {
  const items = images.map( ( item ) => {
    const {id} = item;
    return (
      <li key = {id}>
        <ImageCard
          id = {id}
          imageData = {item}
        />
      </li> );
  } );
  return (
    <ul className = 'container'>
      {items}
    </ul>
  )
};
