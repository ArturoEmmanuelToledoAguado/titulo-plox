import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AtheneaApp } from './AtheneaApp'
import { store } from './store/store'
import './styles.css'

const router = createBrowserRouter([
  {
    path: "/*",
    element: <AtheneaApp/>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} >
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
)
