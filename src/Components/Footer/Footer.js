import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="Footer">
      <div className="row">
        <div className="col1">
          <h4>Conditions générales</h4>
        </div>
        <div className="col2">
          <a href="https://fr-fr.facebook.com/" target="_blank">
            <img src="Facebook.png" alt="Facebook Icon" width="50px" height="50px" />
          </a>
          <a href="https://www.instagram.com/?hl=fr" target="_blank">
            <img src="Instagram.png" alt="Instagram Icon" width="50px" height="50px" />
          </a>
          <a href="https://twitter.com/?lang=fr" target="_blank">
            <img src="Twitter.png" alt="Twitter Icon" width="50px" height="50px" />
          </a>
        </div>
        <div className="col3">
          <h4>
            <Link to="">À propos de l'équipe</Link>
          </h4>
        </div>
      </div>
      <hr />
      <div className="row">
        <p className="col-sm">&copy;{new Date().getFullYear()} Oovy France | Tous droits réservés | Mentions légales | Conditions d'utilisation</p>
      </div>
    </div>
  );
};

export default Footer;
