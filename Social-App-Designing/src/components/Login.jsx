import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
function Login() {
  let [isclick, setisclick] = useState(false);

  let HandleClick = () => {
    setisclick(!isclick);
  };
  return (
    <div className="loginbox">
      <div className="loginsection">
        <div className="logintitle">
          <h1>ChillDose</h1>
          <br />
          <h3>
            <b>
              {" "}
              Connect with your Friends and Relatives <br /> only on ChillDose
            </b>
          </h3>
        </div>
        <div className="logInputs">
          <input
            type="email"
            name=""
            className="input"
            placeholder="Email"
            required
            aria-required
          />
          <input
            type="password"
            name=""
            id=""
            className="input"
            placeholder="Password"
            required
          />
          <button className="button" type="submit">
            Log in
          </button>

          <h5 className="forget">Forget Password ?</h5>
          <button type="submit" className="button2">
            Create new Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
