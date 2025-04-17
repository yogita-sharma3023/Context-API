import React, { useContext } from "react";
import ContextUser from "../utils/UserContextData";

const About = () => {
  const { contextName, setData } = useContext(ContextUser);
  return (
    <>
      <div
        style={{
          width: "200px",
          height: "200px",
          boxShadow: "0  0 10px black ",
          margin: "auto",
          marginTop: "30px",
        }}
      >
        Card
        <div>name :{contextName} </div>
        <input type="text" onChange={(e) => setData(e.target.value)} />
      </div>
    </>
  );
};

export default About;
