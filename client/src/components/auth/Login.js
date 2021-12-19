import React from "react";

const Login = ({ showRegister }) => {
  return (
    <div className="inner-form">
      <h2>Login</h2>
      <form>
        <div className="form-controls flex-col">
          <div className="form-control mb-md">
            <label className="mb-sm d-inline-block" htmlFor="name">
              Email:
            </label>
            <input type="email" />
          </div>
          <div className="form-control mb-md">
            <label className="mb-sm d-inline-block" htmlFor="name">
              Password:
            </label>
            <input type="email" />
          </div>
          <button>Submit</button>
        </div>
      </form>
      <span className="form-question">
        Don't have an account?{" "}
        <button onClick={() => showRegister(true)} className="d-inline-block">
          Register
        </button>
      </span>
    </div>
  );
};

export default Login;
