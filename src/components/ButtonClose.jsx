import React from 'react';
import classNames from 'classnames';

export const ButtonClose = ({onClose, classes = ''}) => {
  const btnClasses = classNames( {
                                   'btn': true,
                                   'btn-close': true,
                                 }, classes );
  return (
    <button className= {btnClasses} onClick = {onClose}>
      <svg className = '' viewBox = '0 0 32 32' aria-hidden = 'false'>
        <path d = 'M25.33 8.55l-1.88-1.88-7.45 7.45-7.45-7.45-1.88 1.88 7.45 7.45-7.45 7.45 1.88 1.88 7.45-7.45 7.45 7.45 1.88-1.88-7.45-7.45z'/>
      </svg>
    </button>
  )
}
