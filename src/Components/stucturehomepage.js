import React from 'react';
import './structurehomepage.css';

export default function Homepage() {
  return (
    <div>
      <div className="oovy">
        <img className="logo" src="logo-oovy.png" alt="logo" />
      </div>
      <div className="para">
        <h2>C'est l'heure parfaite pour un film !</h2>
      </div>
      <div className="choose">
        <a href="#" className="needHelp">
          <p className="text1">J'ai besoin d'aide !</p>
        </a>
        <a href="#" className="noHelp">
          <p className="text2">Laisser moi faire !</p>
        </a>
      </div>
    </div>
  );
}
