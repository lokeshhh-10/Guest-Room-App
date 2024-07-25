import React, { useEffect, useState } from "react";
import "../styles/register.scss";
import { setLogin } from "../redux/state"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

 
const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const inputs = document.querySelectorAll(".input-field");
    inputs.forEach((inp) => {
      inp.addEventListener("focus", () => {
        inp.classList.add("active");
      });
      inp.addEventListener("blur", () => {
        if (inp.value != "") return;
        inp.classList.remove("active");
      });
    });
  }, []);

  // const handleSubmit = async (e) =>{
  //   e.preventDefault()

  //   try {
  //     const response = await fetch('http://localhost:8080/auth/login',{
  //       method : "POST",
  //       headers : {
  //         "Content-Type" : "application/json"
  //       },
  //       body : JSON.stringify({ email, password })
  //     })

  //     //Get data after fetching
  //     const loggedIn = await response.json()

  //     if (loggedIn) {
  //       dispatch(
  //         setLogin({
  //           user: loggedIn.user,
  //           token: loggedIn.token,
  //         })
  //       )
  //       navigate("/");
  //     }
      
  //   } catch (err) {
  //     console.log("Login failed", err.message);
  //   }
  // }

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
    }
  };



  return (
    <main>
      <div className="box">
        <div className="inner-box">
          <div className="forms-wrap">
            <form className="sign-in-form" onSubmit={handleSubmit}>
              <div className="logo">
                <img src="/assets/logo1.png" alt="easyclass" />
                <h4>Rabbit Homes</h4>
              </div>

              <div className="heading">
                <h2>Welcome Back</h2>
                <h6>Not registred yet?</h6>
                <a href="#" className="toggle">
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
                    className="input-field"
                    required
                  />
                  <label>Email</label>
                </div>

                <div className="input-wrap">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    minLength="4"
                    className="input-field"        
                    required
                  />
                  <label>Password</label>
                </div>

                <input type="submit" value="Sign In" className="sign-btn" />

                <p className="text">
                  Forgotten your password or you login datails?
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
    </main>
  );
}

export default Login;