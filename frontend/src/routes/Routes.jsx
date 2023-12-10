import React from 'react'

import Root from './Root'
import ErrorPage from './Error-page'

import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/home/Home'
import UserCrud from '../components/user/UserCrud';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, 
        element: <Home />,
      },
      {
        path: "/usercrud",
        element: <UserCrud />,
      },
    ],
  }
]);

export default router