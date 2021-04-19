import React from 'react';
import Homepage from './Components/HomePage/Homepage';
import Footer from './Components/Footer/Footer';
import Headerallpages from './Components/headerallpages';
import NeedHelp from './Components/NeedHelp/NeedHelp';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Homepage />

        <Switch>
          <Route path="/homepage" components={Homepage}>
            <Homepage />
          </Route>
          <Route path="/needhelp" composents={NeedHelp}>
            <NeedHelp />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
