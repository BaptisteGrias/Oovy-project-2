import React from 'react';
import './AboutUs.css';
import Headerallpages from '../headerallpages';
import Footer from '../Footer/Footer';

const paraOne = 'A propos :';
const description = "Ceci est la description des membres de l'équipe Oovy et blabla et blabla";

export default function AboutUs() {
  return (
    <div>
      <Headerallpages />
      <p className="trait"></p>
      <h2 className="text1">{paraOne}</h2>
      <div className="contains">
        <p className="description">{description}</p>
      <Footer />

      </div>
    </div>
  );
}