import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import allRoutes from './index-route';
class App extends React.Component {
  render() {
    return (
      <div>
        {allRoutes}
      </div>
    )
  }
}

export default App;
