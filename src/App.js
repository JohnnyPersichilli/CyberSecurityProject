import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';

import Home from './pages/home/Home';
import USBDrive from './pages/usbdrive/USBDrive';
import phishingStats from './pages/phishingStats/phishingStats';
import Admin from './pages/admin/Admin';


class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={USBDrive}/>
          <Route exact path='/home' component={Home}/>
          <Route exact path='/phishingStats' component={phishingStats}/>
          <Route exact path='/admin' component={Admin}/>
        </Switch>
      </Router>
    );
  }
}

export default App;