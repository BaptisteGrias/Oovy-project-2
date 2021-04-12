import React from 'react';
import './structurehomepage.css';

export default function Homepage() {
  return (
    <div>
      <div className="logo">
        <img src="logo-oovy.png" alt="logo" />
      </div>
      <div className="para">
        <h2>C'est l'heure parfaite pour un film !</h2>
      </div>
      <div className="choose">
        <a href="#" className="needHelp">
          <div className="text1">J'ai besoin d'aide !</div>
        </a>
        <a href="#" className="noHelp">
          <div className="text2">Laisser moi faire !</div>
        </a>
      </div>
    </div>
  );
}
