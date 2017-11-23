import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import DashboardMain from './components/dashboard_main';
import TopBar from './components/topbar';

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
