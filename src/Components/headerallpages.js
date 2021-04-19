import React from 'react';
import './headerallpages.css';
import { Link } from 'react-router-dom';
import Homepage from './HomePage/Homepage';

export default function Headerallpages() {
  return (
    <div>
      <Link className="headerlogo" to="/homepage">
        <img src="Oovyblanc2.png" alt="logo" />
      </Link>
    </div>
  );
}
