import React, { useContext, useRef, useState } from "react";
import "./Login.css";
import { LoginCall } from "../ApiCalls";
import { AuthContext } from "../context/authContext";
import { Link } from "react-router-dom";

function Login() {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);
  const [click, setClick] = useState(false);
  let Handleclick = () => {
    setClick(!click);
  };

  let HandleClick = (e) => {
    e.preventDefault();
    // console.log(email.current.value);
    LoginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };
  console.log(user);
  return (
    <div className="loginbox">
      <div className="loginsection">
        <div className="logintitle">
          <h1>ChillDose</h1>
          <br />
          <h3>
            <b>
              {"     "}
              Connect with your Friends and Relatives <br /> only on ChillDose
            </b>
          </h3>
        </div>
        <form className="logInputs" onSubmit={HandleClick}>
          <input
            type="email"
            className="input"
            placeholder="Email"
            ref={email}
            required
            aria-required
          />
          <input
            type="password"
            className="input"
            placeholder="Password"
            minLength="6"
            ref={password}
            required
          />
          <button className="button" type="submit">
            Log in
          </button>

          <h5 className="forget">Forget Password ?</h5>

          <Link to="/register" onSubmit={Handleclick}>
            <button className="button2">Create new Account</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
