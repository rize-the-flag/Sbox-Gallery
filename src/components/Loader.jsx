import React from 'react';
import './loader.scss';

export const Loader = () => {
  return (
    <div className = "overlay">
      <div className = "lds-roller">
        <div/>
        <div/>
        <div/>
        <div/>
        <div/>
        <div/>
        <div/>
        <div/>
      </div>
    </div>
  );
};
