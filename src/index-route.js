import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import searchRoutes from './routes/search-routes';
export default (
  <BrowserRouter basename="/">
    <div>
      {searchRoutes}
    </div>
  </BrowserRouter>
);