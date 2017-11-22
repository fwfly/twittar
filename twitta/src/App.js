import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import DashboardMain from './containers/dashboard_main';
import TopBar from './containers/topbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar />
        <DashboardMain />
      </div>
    );
  }
}

export default App;
