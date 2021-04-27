import React from 'react';
import './Filters.css';
import Headerallpages from '../headerallpages';
import Footer from '../Footer/Footer';
import Dropdown from './Years';
import RatingClearable from './Rating';


function Filters() {
  return (
    <div>
      <Headerallpages />
      <Dropdown startYear={1980} endYear={2012} />
      <Dropdown startYear={1980} endYear={2012} />
      <RatingClearable />
      <Footer />
    </div>
  );
}

export default Filters;

