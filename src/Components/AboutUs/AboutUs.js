import React from 'react';
import './AboutUs.css';
import Headerallpages from '../headerallpages';
import Footer from '../Footer/Footer';

const paraOne = 'A propos :';
const description = "Ceci est la description des membres de l'équipe Oovy ";

const AboutUs = () => {
  return (
    <div>
      <Headerallpages />
      <p className="trait_aboutus"></p>
      <h2 className="text1_aboutus">{paraOne}</h2>
      <div className="contains">
        <p className="description">{description}</p>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
