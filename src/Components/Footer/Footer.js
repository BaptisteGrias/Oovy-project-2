import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>Conditions générales</h4>
          </div>
          <div className="col">
            
            <ul className="list-Medias">
              <li>
                <a href="https://www.instagram.com/?hl=fr" target="_blank">
                  {' '}
                  <img src="Instagram.png" alt="Instagram Icon" width="50px" height="50px" />{' '}
                </a>{' '}
              </li>
              <li>
                <a href="https://fr-fr.facebook.com/" target="_blank">
                  {' '}
                  <img src="Facebook.png" alt="Facebook Icon" width="50px" height="50px" />{' '}
                </a>
              </li>
              <li>
                <a href="https://twitter.com/?lang=fr" target="_blank">
                  {' '}
                  <img src="Twitter.png" alt="Twitter Icon" width="50px" height="50px" />{' '}
                </a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h4>
              <a href="">À propos</a>
            </h4>
          </div>
        </div>
        <hr className="hr" />
        <div className="row">
          <p className="col-sm">&copy;{new Date().getFullYear()} Oovy France | Tous droits réservés | Mentions légales | Conditions d'utilisation</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
