import React, { Component } from 'react';
import './App.css';
import DailyLimit from './components/DailyLimitComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DailyLimit />
      </div>
    );
  }
}

export default App;
