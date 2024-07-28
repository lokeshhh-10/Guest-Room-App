import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/register.scss";

const Register = () => {
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

  // Initialing the formData using the useState hook
  // formData is an object that holds the input values for a form

  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, //for copy this exiting data
      [name]: value,
    });
  };

  console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const register_form = new FormData();

      for (var key in formData) {
        register_form.append(key, formData[key]);
      }

      console.log("Form data:", ...register_form.entries());

      const response = await fetch("http://localhost:8080/auth/register", {
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
                    // defaultValue={formData.email}
                    onChange={handleChange}
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
