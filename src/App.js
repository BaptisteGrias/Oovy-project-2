import React from 'react';
import Homepage from './Components/HomePage/Homepage';
import Footer from './Components/Footer/Footer';
import Dropdown from './Components/Filters/Filters';

function App() {
  return (
    <div>
      <Dropdown startYear={1980} endYear={2022} />
      <Dropdown startYear={1980} endYear={2022} />
    </div>
  );
}

export default App;
