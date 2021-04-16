import React from 'react';
import './headerallpages.css';

const headerLogo = 'Oovyblanc2.png';

export default function Headerallpages() {
  return (
    <div className="header">
      <img className="headerlogo" src={headerLogo} alt="logo" />
    </div>
  );
}
