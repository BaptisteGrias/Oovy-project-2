import React from 'react';
import './AboutUs.css';

const paraOne = 'A propos :';
const description = "Ceci est la description des membres de l'équipe Oovy et blabla et blabla";

export default function AboutUs() {
  return (
    <div>
      <p className="trait"></p>
      <h2 className="text1">{paraOne}</h2>
      <div className="contains">
        <p className="description">{description}</p>
      </div>
    </div>
  );
}
