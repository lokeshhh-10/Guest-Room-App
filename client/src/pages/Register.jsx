import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/register.scss";
const API_URL = "http://localhost:5000" || import.meta.env.VITE_API_URL;

const Register = () => {
  // Create refs for the input fields
  const inputRefs = useRef([]);

  // Initializing formData using the useState hook
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const handleFocus = (event) => {
      event.target.classList.add("active");
    };

    const handleBlur = (event) => {
      if (event.target.value !== "") return;
      event.target.classList.remove("active");
    };

    inputRefs.current.forEach((ref) => {
      if (ref) {
        ref.addEventListener("focus", handleFocus);
        ref.addEventListener("blur", handleBlur);
      }
    });

    return () => {
      inputRefs.current.forEach((ref) => {
        if (ref) {
          ref.removeEventListener("focus", handleFocus);
          ref.removeEventListener("blur", handleBlur);
        }
      });
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const register_form = new FormData();

      for (const key in formData) {
        register_form.append(key, formData[key]);
      }

      console.log("Form data:", ...register_form.entries());

      const response = await fetch(`${API_URL}/auth/register`, {
        method: "POST",
        body: register_form,
      });

      if (response.ok) {
        navigate("/login");
      }
    } catch (err) {
      console.log("Register failed!", err.message);
    }
  };

  return (
    <main>
      <div className="box">
        <div className="inner-box">
          <div className="forms-wrap">
            <form className="Login-form" onSubmit={handleSubmit}>
              <div className="logo">
                <img src="/assets/logo1.png" alt="Rabbit Homes" />
                <h4>Rabbit Homes</h4>
              </div>
              <div className="heading">
                <h2>Get Started</h2>
                <h6>Already have an account?</h6>
                <a href="/login" className="toggle">
                  Sign in
                </a>
              </div>
              <div className="actual-form">
                <div className="input-wrap">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    ref={(el) => (inputRefs.current[0] = el)}
                    className="input-field"
                    required
                  />
                  <label className="Lables">Name</label>
                </div>
                <div className="input-wrap">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    ref={(el) => (inputRefs.current[1] = el)}
                    className="input-field"
                    autoComplete="off"
                    required
                  />
                  <label className="Lables">Email</label>
                </div>
                <div className="input-wrap">
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    minLength={4}
                    ref={(el) => (inputRefs.current[2] = el)}
                    className="input-field"
                    autoComplete="off"
                    required
                  />
                  <label className="Lables">Password</label>
                </div>
                <input type="submit" className="sign-btn" />
                {/* <button type="submit" className="sign-btn">
                  Submit
                </button> */}
                <p className="text">
                  By signing up, I agree to the
                  <a href="#">Terms of Services</a> and
                  <a href="#">Privacy Policy</a>
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
};

export default Register;
