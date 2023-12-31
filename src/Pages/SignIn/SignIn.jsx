import { NavLink, useNavigate } from "react-router-dom";

import { useState, useContext } from "react";

import "./SignIn.css";
import { FillDetails } from "../../ToastUtils";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { AuthenticationContext } from "../../context/AuthenticationContext";

export const SignIn = () => {
  const { userSignIn } = useContext(AuthenticationContext);
  const navigate = useNavigate();

  const [signinDetails, setSignInDetails] = useState({
    username: "",
    password: "",
  });

  const handleLogIn = (e) => {
    e.preventDefault();
    if (
      signinDetails.username.trim() === "" ||
      signinDetails.password.trim() === ""
    ) {
      FillDetails();
    } else {
      userSignIn(signinDetails, navigate);
    }
  };

  const handleGuest = () => {
    const credential = {
      username: "adarshbalika",
      password: "adarshBalika123",
    };
    userSignIn(credential, navigate);
  };

  return (
    <div className="signin-parent-div">
      {" "}
      <NavLink className="signin-page-link" to="/">
        {" "}
        <h1 style={{ marginTop: "0" }}> ChirpChat </h1>{" "}
      </NavLink>
      <div className="signin-container">
        <div>
          <h2>
            {" "}
            <FontAwesomeIcon icon={faRightToBracket} /> Sign In
          </h2>

          <div className="input-div">
            <p>Username</p>
            <input
              onChange={(e) =>
                setSignInDetails({ ...signinDetails, username: e.target.value })
              }
              placeholder="jenniferwinget"
              className="signin-input"
              type="text"
            />
          </div>

          <div className="input-div">
            <p> Password </p>
            <input
              onChange={(e) =>
                setSignInDetails({
                  ...signinDetails,
                  password: e.target.value,
                })
              }
              placeholder="***********"
              className="signin-input"
              type="password"
            />
          </div>
          <div className="signin-btn-div">
            <button onClick={handleLogIn} className="signin-btn">
              SIGN IN
            </button>
            <NavLink className="signin-page-link" to="/signup">
              <p> Create New Account </p>
            </NavLink>
            <p className="guest" onClick={handleGuest}>
              Sign In as Guest
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};