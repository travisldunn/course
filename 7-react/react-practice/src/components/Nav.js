import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { login } from "../utils/login";
import { UserContext } from "../context/UserContext";

const Nav = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <header>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/tic-tac-toe">
        <button>Tic-Tac-Toe</button>
      </Link>
      <Link to="/debounce">
        <button>Debounce</button>
      </Link>
      <Link to="/refpopup">
        <button>RefPopUp</button>
      </Link>
      <Link to="/usestate">
        <button>UseState</button>
      </Link>
      {user ? (
        <button
          onClick={() => {
            // call logout
            setUser(null);
          }}
        >
          logout
        </button>
      ) : (
        <button
          onClick={async () => {
            const user = await login();
            setUser(user);
          }}
        >
          login
        </button>
      )}
    </header>
  );
};

export default Nav;
