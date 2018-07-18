import React from 'react';
import './index.css';
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
