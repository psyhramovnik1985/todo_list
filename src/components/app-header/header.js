import React from 'react';
import './header.css';

const AppHeader = ({toDo, done}) => {
  return (
    <header className="header">
      <h1 className="header__text">Todo List</h1>
      <div className="header__logo"></div>
    </header>
  );
};

export default AppHeader;