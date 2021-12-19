import React from "react";

const Register = ({ showLogin }) => {
  return (
    <div className="inner-form">
      <h2>Register</h2>
      <form>
        <div className="form-controls flex-col">
          <div className="form-control mb-md">
            <label className="mb-sm d-inline-block" htmlFor="name">
              Username:
            </label>
            <input type="text" />
          </div>
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
        Already have an account?{" "}
        <button onClick={() => showLogin(false)} className="d-inline-block">
          Login
        </button>
      </span>
    </div>
  );
};

export default Register;
