import React, { useState } from 'react';

export function LoginButton(props) {

  //
  const [isLoggedIn, setisLoggedIn] = useState(null);

  const ToggleLoggedIn = () => {
    isLoggedIn === true ? setisLoggedIn(false) : setisLoggedIn(true);
  }

  return (
    <div className="buttons">
      <a className="button is-primary">
        <strong>Sign up</strong>
      </a>
      {isLoggedIn ? (
        <button  className="button is-light" onClick={props.navbarMethod}>
          Login
        </button >) : (
        <button  className="button is-light" onClick={props.navbarMethod}>
          Logout
        </button >
        )}
    </div>
  )
}