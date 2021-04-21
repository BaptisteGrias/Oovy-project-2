import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from '../HomePage/Homepage';
import NeedHelp from '../NeedHelp/NeedHelp';
import Filters from '../Filters/Filters';

const MyRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/needhelp" component={NeedHelp} />
        <Route path="/filters" component={Filters} />
        <Route path="/homepage" component={Homepage} />
      </Switch>
    </Router>
  );
};

export default MyRouter;
