import React from 'react';
import Homepage from './Components/HomePage/Homepage';
import Footer from './Components/Footer/Footer';
import Headerallpages from './Components/headerallpages';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Headerallpages />

        <Switch>
          <Route path="/homepage" components={Homepage}>
            <Homepage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
