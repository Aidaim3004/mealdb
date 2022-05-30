import React from 'react';
import {Link} from "react-router-dom";
import logo from '../../assets/images/logo-mealdb.png'
import './Header.css'

const Header = () => {
  return (
   <div className="header">
     <div className="container header-container">
       <Link to="/">
         <img src={logo} alt="The meals DB" className="logo"/>
       </Link>
       <div className="header-menu">
         <Link to="/">
           <button className="home">Home</button>
         </Link>
         <Link to="/about">
           <button className="api">API</button>
         </Link>
         <button className="forum-btn">
           <a href="https://forum.kodi.tv/showthread.php?tid=282387" className="forum">Forum</a>
         </button>
       </div>
     </div>
   </div>
  );
};

export default Header;


