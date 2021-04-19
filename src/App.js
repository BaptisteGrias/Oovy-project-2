import React from 'react';
import Homepage from './Components/HomePage/Homepage';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <Footer />
      <Homepage />
    </div>
  );
}

export default App;
