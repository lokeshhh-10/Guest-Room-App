import React, { useEffect, useRef, useState } from "react";
import "../styles/register.scss";
import { setLogin } from "../redux/state";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Snackbar, Alert } from "@mui/material";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("error"); // 'success' or 'error'

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Refs for input fields
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() => {
    const handleFocus = (event) => {
      event.target.classList.add("active");
    };

    const handleBlur = (event) => {
      if (event.target.value === "") {
        event.target.classList.remove("active");
      }
    };

    const emailInput = emailRef.current;
    const passwordInput = passwordRef.current;

    if (emailInput) {
      emailInput.addEventListener("focus", handleFocus);
      emailInput.addEventListener("blur", handleBlur);
    }

    if (passwordInput) {
      passwordInput.addEventListener("focus", handleFocus);
      passwordInput.addEventListener("blur", handleBlur);
    }

    // Cleanup event listeners on unmount
    return () => {
      if (emailInput) {
        emailInput.removeEventListener("focus", handleFocus);
        emailInput.removeEventListener("blur", handleBlur);
      }
      if (passwordInput) {
        passwordInput.removeEventListener("focus", handleFocus);
        passwordInput.removeEventListener("blur", handleBlur);
      }
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log({ email, password });

      const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      console.log(response.status, response.statusText);

      if (!response.ok) {
        const errorDetails = await response.text();
        console.log("Error details:", errorDetails);
        setAlertMessage(`Error: ${errorDetails}`);
        setAlertSeverity("error");
        setAlertOpen(true);
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const loggedIn = await response.json();
      console.log(loggedIn);

      if (loggedIn) {
        dispatch(
          setLogin({
            user: loggedIn.user,
            token: loggedIn.token,
          })
        );
        navigate("/");
      }
    } catch (err) {
      console.log("Login failed", err.message);
      setAlertMessage(`Invalid username or password.`);
      setAlertSeverity("error");
      setAlertOpen(true);
    }
  };

  const handleAlertClose = () => {
    setAlertOpen(false);
  };

  return (
    <main>
      <div className="box">
        <div className="inner-box">
          <div className="forms-wrap">
            <form className="Login-form" onSubmit={handleSubmit}>
              <div className="logo">
                <img src="/assets/logo1.png" alt="easyclass" />
                <h4>Rabbit Homes</h4>
              </div>

              <div className="heading">
                <h2>Welcome Back</h2>
                <h6>Not registered yet?</h6>
                <a href="/register" className="toggle">
                  Sign up
                </a>
              </div>

              <div className="actual-form">
                <div className="input-wrap">
                  <input
                    type="text"
                    minLength="4"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    ref={emailRef}
                    className="input-field"
                    required
                  />
                  <label className="Lables">Email</label>
                </div>

                <div className="input-wrap">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    minLength="4"
                    ref={passwordRef}
                    className="input-field"
                    required
                  />
                  <label className="Lables">Password</label>
                </div>

                <input type="submit" value="Sign In" className="sign-btn" />

                <p className="text">
                  Forgotten your password or you login details?
                  <a href="#">Get help</a> signing in
                </p>
              </div>
            </form>
          </div>

          <div className="carousel">
            <div className="images-wrapper">
              <img
                src="/assets/image1.png"
                className="image img-1 show"
                alt=""
              />
            </div>

            <div className="text-slider">
              <div className="text-wrap">
                <div className="text-group">
                  <h2>Relax, unwind, it's all online</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Snackbar
        open={alertOpen}
        autoHideDuration={3000}
        onClose={handleAlertClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleAlertClose} severity={alertSeverity}>
          {alertMessage}
        </Alert>
      </Snackbar>
    </main>
  );
};

export default Login;
