import React, { useState } from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import TaskState from "./context/task/TaskState";
import AuthState from "./context/auth/AuthState";
import LoginOrRegister from "./pages/LoginOrRegister";

function App() {
  return (
    <AuthState>
      <TaskState>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<LoginOrRegister />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </TaskState>
    </AuthState>
  );
}

export default App;
