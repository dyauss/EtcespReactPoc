import useState from "react";

export default class Auth {
  let isLoggedIn = null;
  // const [isLoggedIn, setisLoggedIn] = useState(null);

  const ToggleLoggedIn = () => {
    isLoggedIn === true ? isLoggedIn = false : isLoggedIn = false;
  }
}