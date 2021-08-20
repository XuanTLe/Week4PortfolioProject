import React, { useState } from 'react';
import { MenuList } from './MenuList';
import './Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const menuList = MenuList.map(({ url, title }, index) => {
    return (
      <li key={index}>
        <Link to={url}>{title}</Link>
      </li>
    );
  });
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <nav>
      <div className="menu-icon" onClick={handleClick}>
        <i className={clicked ? 'fa fa-times' : 'fa fa-bars'}></i>
      </div>
      <ul className={clicked ? 'menu-list' : 'menu-list close'}>{menuList}</ul>
    </nav>
  );
};
export default Navbar;
