import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import LoginPage from './components/LoginPage'
import SignUp from './components/SignUp'
import Home from './components/Home'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/LoginPage",
    element: <LoginPage />,
  },
  {
    path: "/SignUp",
    element: <SignUp />,
  },
  {
    path: "/Home",
    element: <Home />
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
      <Provider store={store}>
      <RouterProvider router={router} />
      </Provider>
  
)
