import React from 'react';
import './AboutUs.css';

const paraOne = 'A propos :';
const description = "Ceci est la description des membres de l'équipe Oovy et blabla et blabla";

export default function AboutUs() {
  return (
    <div>
      <p className="trait_aboutus"></p>
      <h2 className="text1_aboutus">{paraOne}</h2>
      <div className="contains">
        <p className="description">{description}</p>
      </div>
    </div>
  );
}
