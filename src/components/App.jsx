import React from 'react';


export const App = ({currentUser}) => {
  return (
    <h1>{`Добро пожаловать: ${currentUser.name}`}</h1>
  )
}
