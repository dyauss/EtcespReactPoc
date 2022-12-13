import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// import App from './App';

//Pages
import Root from './pages/root/root';
import ErrorPage from "./pages/error/Error";
import Index from './pages/index/Index';
import Home from './pages/home/Home';
import Cat from './pages/cat/Cat';
import Login from './pages/login/Login';
import NewUser from './pages/user/NewUser';
import User from './pages/user/User';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, element: <Index />
      },
      {
        path: "home",
        element: <Home />  
      },
      {
        path: "cat",
        element: <Cat />
      },
      {
        path: "new-user",
        element: <NewUser />
      },
      {
        path: "users/:userId",
        element: <User />
      }
    ],
  },
  {
    path: "login",
    element: <Login />
  }
]);

// <App />
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
