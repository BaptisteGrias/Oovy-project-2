import React from 'react';
import './needHelp.css';
import Headerallpages from '../headerallpages';
import Footer from '../Footer/Footer';
import GetMoovie from './GetMoovie';
import GetTrailer from './GetTrailer';

const NeedHelp = () => {
  return (
    <div>
      <Headerallpages />
      <GetMoovie />
      <Footer />
    </div>
  );
};

export default NeedHelp;
