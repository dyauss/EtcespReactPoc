import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';

//Pages
import Root from './pages/root/root';
import ErrorPage from "./pages/error/Error";
import Index from './pages/index/Index';
import Home from './pages/home/Home';
import Users from './pages/users/Users';
import Login from './pages/login/Login';
import NewUser from './pages/user/NewUser';
import User from './pages/user/User';

//Components
import { Navbar } from './shared/components';
import Protected from './shared/components/protected/Protected';

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(null)

  function ToggleSignedInn() {
    isSignedIn === true ? setIsSignedIn(false) : setIsSignedIn(true);
  }

  function testFunction() {
    console.log("Funcionando");
  }

  const color = 'red';

  return (
    <BrowserRouter>
      <Navbar
        color = {color}
        ToggleSignedInn = {ToggleSignedInn}
        isSignedIn = {isSignedIn}
       />
      <Routes>
        <Route path="/" element={<Index />} errorElement={<ErrorPage />} />
        <Route 
          path="home" 
          element={
            <Protected isSignedIn={isSignedIn}>
              <Home />
            </Protected>
          } 
        />
        <Route path="users" element={<Users />} />
        <Route path="new-user" element={<NewUser />} />
        <Route path="user/:userId" element={<User />} />
        {/*<Route path="user" element={<User />} />*/}
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}