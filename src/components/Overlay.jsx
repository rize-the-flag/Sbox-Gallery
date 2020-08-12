import React, { useEffect } from 'react';
import classNames from 'classnames';

export const Overlay = ( {classes = '', children, closeHandler} ) => {

  let overlayRef = null;

  const componentClasses = classNames( {
                                         'overlay': true,
                                       }, classes );

  const handleClick = ( ev ) => {
    if (ev.target === overlayRef) {
      closeHandler( ev );
    }
  };

  useEffect( () => {
    const onEscapeKeyPressed = ( ev ) => {
      if (ev.key === 'Escape') closeHandler( ev );
    };
    document.addEventListener( 'keyup', onEscapeKeyPressed );
    return () => {
      document.removeEventListener( 'keyup', onEscapeKeyPressed );
    };
  }, [] );

  return (
    <div
      ref = {node => overlayRef = node}
      className = {componentClasses}
      onClick = {handleClick}
    >
      {children}
    </div>
  );
};
