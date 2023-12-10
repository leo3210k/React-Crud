import React from 'react';
import './App.css'

import { RouterProvider } from "react-router-dom";

import Router from '../routes/Routes'

export default props => 
  <div className='app'>
    <RouterProvider router={Router} />
  </div>
