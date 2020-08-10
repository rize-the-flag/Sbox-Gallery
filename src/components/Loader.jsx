import React from 'react';
import '../scss/loader.scss';

export const Loader = () => {
  return (
    <div className = 'overlay overlay--content-center'>
      <div className = 'lds-roller'>
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
