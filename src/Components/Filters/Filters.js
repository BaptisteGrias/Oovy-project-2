import React from 'react';
import Dropdown from './Years';
import RatingClearable from './Rating';

function Filters() {
  return (
    <div>
      <Dropdown startYear={1980} endYear={2012} />
      <Dropdown startYear={1980} endYear={2012} />
      <RatingClearable />
    </div>
  );
}

export default Filters;
