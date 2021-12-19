import React, { useState } from "react";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import NavBar from "../components/layout/NavBar";

const LoginOrRegister = () => {
  const [showRegister, setShowRegister] = useState(true);
  const showRegisterHandler = (boolean) => {
    setShowRegister(boolean);
  };
  return (
    <>
      <NavBar />
      <section className="section-center">
        {showRegister && <Register showLogin={showRegisterHandler} />}
        {!showRegister && <Login showRegister={showRegisterHandler} />}
      </section>
    </>
  );
};

export default LoginOrRegister;
