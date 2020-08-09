import React from 'react';
import classNames from 'classnames';

export const DateTime = ( {date = '', locale, classes} ) => {
  const imageCreationDate = new Date( date ).toLocaleDateString( locale );
  const dateClasses = classNames( {
                                    'date-created': true,
                                  }, classes );
  return (
    <time
      dateTime = {date}
      className = {dateClasses}
    >
      {imageCreationDate}
    </time>
  );
};
