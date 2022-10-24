import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/UserContext";

const About = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <p>Email: {user?.email}</p>
    </div>
  );
};

export default About;
