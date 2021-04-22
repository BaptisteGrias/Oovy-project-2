import React from 'react';
import './Homepage.css';
import { Link } from 'react-router-dom';

const img = 'Oovyblanc2.png';
const textPara = "C'est l'heure parfaite pour un film !";
const cardOne = "J'ai besoin d'aide !";
const cardTwo = 'Laisser moi faire !';

export default function Homepage() {
  return (
    <div>
      <div className="oovy">
        <img className="logo" src={img} alt="logo" />
      </div>
      <div className="trait"></div>
      <div className="para">
        <h2>{textPara}</h2>
      </div>
      <div className="choose">
        <Link className="needHelp" to="/NeedHelp">
          <p className="text1">{cardOne}</p>
        </Link>
        <Link className="noHelp" to="/Filters">
          <p className="text2">{cardTwo}</p>
        </Link>
      </div>
    </div>
  );
}
