import React from 'react';
import {Link} from "react-router-dom";
import flag from "../../assets/images/flag.png"
import tcdb from "../../assets/images/tcdb.png"
import tadb from "../../assets/images/tadb.png"
import tsdb from "../../assets/images/tsdb.png"
import "./Footer.css"


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-box">
          <div className="footer_box_info">
            <div>
              <p className="footer_box_info-desc">© 2022 TheMealDB</p>
              <div className="footer_box_info-count">
                <p className="footer-desc">Proudly built in the UK </p>
                <img src={flag} alt="flag" className="img-footer"/>
              </div>
            </div>
          </div>
          <div className="footer_box_info">
            <Link to="#"><img src={tcdb} alt="logo"/></Link>
            <Link to="#"><img src={tadb} alt="logo"/></Link>
            <Link to="#"><img src={tsdb} alt="logo"/></Link>
          </div>
          <div className="footer_box_info">
            <Link to="#">About</Link>
            <Link to="#">Faq</Link>
            <Link to="#">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;