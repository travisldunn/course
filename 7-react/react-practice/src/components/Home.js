import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Home = () => {
  const { user } = useContext(UserContext);

  console.log(user);
  return (
    <div className="home">
      <h1>Welcome</h1>
      {user ? <h1>{user.username}</h1> : null}
    </div>
  );
};

export default Home;
