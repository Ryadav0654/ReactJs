import React, { useContext } from "react";
import UserContext from "../Context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  // check user is not blank
  if (!user) return <h2>Please Login.</h2>;

  return <div>Welcome, {user.username} </div>;
}

export default Profile;
