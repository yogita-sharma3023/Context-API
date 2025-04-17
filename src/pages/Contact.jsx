import React from "react";
import { useContext } from "react";
import ContextUser from "../utils/UserContextData";

const Contact = () => {
  const { contextName } = useContext(ContextUser);
  console.log(contextName);
  return (
    <>
      <h2>Contact Us Pagee</h2>
      <h1>{contextName}</h1>
    </>
  );
};

export default Contact;
