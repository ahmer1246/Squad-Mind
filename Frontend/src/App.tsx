import {  RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';

import React from 'react';
import Home from './page/home/Home';
import AddFeedback from './page/form/AddFeedback';

const router =createBrowserRouter([
  {
    
    path:"/",
    element:<Home/>
  },
  {
    path:"/addFeedback",
    element:<AddFeedback />
  }
])

const App: React.FC = () => {
  return (
    <div>
      <Header />
    <RouterProvider router={router} />
      </div>
      
    
  )
}

export default App
