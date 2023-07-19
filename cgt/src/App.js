import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Referralpage from "./Components/Referralpage";
import Studentpage from "./Components/Studentpage";
import HomePage from "./Components/HomePage";
import { useEffect } from "react";
import React, { useState } from "react";

import "./Css/login.css";
import boss from "./Assets/Images/boss.png";
import { useNavigate } from "react-router-dom";

import { TextField, Button } from "@mui/material";

const userRole = {
  admin: "admin",
  referral: "referral",
  trainer: "trainer",
};

const userType = localStorage.getItem("role");
function App() {
  return (
    <>
      <Routes>
        <Route
          path="/referralpage"
          element={
            <PorotectedRefDetails>
              <Referralpage />
            </PorotectedRefDetails>
          }
        ></Route>
        <Route
          path="/studentpage"
          element={
            <PorotectedStudentDetails>
              <Studentpage />
            </PorotectedStudentDetails>
          }
        ></Route>
        <Route
          path="/trainerpage"
          element={
            <PorotectedTrainerDetails>
              <Studentpage />
            </PorotectedTrainerDetails>
          }
        ></Route>
        <Route path="/" element={<Adminlogin />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
      </Routes>
    </>
  );
}

const PorotectedRefDetails = ({ children }) => {
  if (userType == "admin") {
    return <>{children}</>;
  } else {
    return (
      <div>
        <h2>No Access</h2>
      </div>
    );
  }
};

const PorotectedStudentDetails = ({ children }) => {
  if (userType == "admin") {
    return <>{children}</>;
  } else {
    return (
      <div>
        <h2>No Access</h2>
      </div>
    );
  }
};

const PorotectedTrainerDetails = ({ children }) => {
  if (userType == "admin") {
    return <>{children}</>;
  } else {
    return (
      <div>
        <h2>No Access</h2>
      </div>
    );
  }
};
// login access
function Adminlogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const submitAdminLogin = (e) => {
    if (email === "abc@gmail.com" && password === "12345") {
      alert("sucess refer");
      setError("");
      localStorage.setItem("role", "referral");

      navigate("/home");
    } else if (email === "admin" && password === "12345") {
      alert("admin");
      setError("");
      navigate("/home");
      localStorage.setItem("role", "admin");
    } else if (email !== "abc@gmail.com") {
      setError("Incorrect Email");
      return error;
    } else {
      setError("incorrect password");
      setEmail("");
      setPassword("");

      return error;
    }
  };
  return (
    <>
      <div className="main-page">
        <div className="login-card">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src={boss} id="logo-admin"></img>
          </div>
          <div className="style-heading">
            <span>Career Guidance Technologies</span>
          </div>

          {/* <h2>Login</h2> */}

          <div>
            <form onSubmit={submitAdminLogin}>
              <div className="inputs-admin">
                <TextField
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="text"
                  sx={{ width: "80%", margin: "10px 0 10px 0" }}
                  label="Username"
                  variant="standard"
                  required
                />

                <TextField
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  sx={{ width: "80%", margin: "10px  0 10px 0" }}
                  label="Password"
                  variant="standard"
                  required
                />

                {error && <div>{error}</div>}

                <Button
                  type="submit"
                  sx={{ width: "80%" }}
                  size="large"
                  variant="outlined"
                  className="btn-admin"
                  color="secondary"
                >
                  Login
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
