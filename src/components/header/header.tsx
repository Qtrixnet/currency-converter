import './header.scss';
import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__item">
            <NavLink className="header__link" to={'/exchange'}>Обмен валют</NavLink>
          </li>
          <li className="header__item">
            <NavLink className="header__link" to={'/'}>Курс валют</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
