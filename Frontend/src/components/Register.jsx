import "./Register.css";
import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
// import { Navigate } from "react-router-dom";

function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);
  const [isclick, setIsclick] = useState(false);

  const HandleLogin = () => {
    setIsclick(!isclick);
  };

  let HandleClick = async (e) => {
    e.preventDefault();
    // console.log(email.current.value);
    if (passwordAgain.current.value !== password.current.value) {
      password.current.setCustomValidity("Password don't Match");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        const ApiUrl = import.meta.env.VITE_API_URL;

        await axios.post(ApiUrl + "auth/user/register", user);
        return navigate("/login", { replace: true });
      } catch (err) {
        console.log(err);
      }
    }
  };
  console.log(user);
  return (
    <div className="Registerbox">
      <div className="Registersection">
        <div className="Registertitle">
          <h1>ChillDose</h1>
          <br />
          <h3>
            <b>
              {"     "}
              Connect with your Friends and Relatives <br /> only on ChillDose
            </b>
          </h3>
        </div>
        <form className="RegisterInputs" onSubmit={HandleClick}>
          <input
            type="text"
            className="Registerinput"
            placeholder="Full Name"
            ref={username}
            required
            aria-required
          />
          <input
            type="email"
            className="Registerinput"
            placeholder="Email"
            ref={email}
            required
            aria-required
          />
          <input
            type="password"
            className="Registerinput"
            placeholder="Password"
            minLength="6"
            ref={password}
            required
          />
          <input
            type="password"
            className="Registerinput"
            placeholder="Again Password"
            minLength="6"
            ref={passwordAgain}
            required
          />
          <button className="button" type="submit">
            Sign in
          </button>

          <Link to="/login" onClick={HandleLogin}>
            <button className="button2">Log into Account</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Register;
