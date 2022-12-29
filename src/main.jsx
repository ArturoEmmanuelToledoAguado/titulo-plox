import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AtheneaApp } from './AtheneaApp'
import './styles.css'

const router = createBrowserRouter([
  {
    path: "/*",
    element: <AtheneaApp/>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
