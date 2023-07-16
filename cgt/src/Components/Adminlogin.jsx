import React, { useState } from "react";
import "../Css/login.css";
import { useNavigate } from "react-router-dom";

import { TextField, Button } from "@mui/material";
function Adminlogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const submitAdminLogin = (e) => {
    if (email === "abc@gmail.com" && password === "12345") {
      alert("success");
      setError("");
      navigate("/referralpage");
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
          <span>Career Guidance Technologies</span>

          <h2>Admin Login</h2>
          <div>
            <form>
              <div className="inputs-admin">
                <TextField
                  id="standard-basic"
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
                  id="standard-basic"
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
                  onClick={submitAdminLogin}
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

export default Adminlogin;
