import "./Landing.css";

import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthenticationContext } from "../../context/AuthenticationContext";

export const Landing = () => {
  const { userSignIn } = useContext(AuthenticationContext);
  const navigate = useNavigate();

  const handleGuest = () => {
    const credential = {
      username: "adarshbalika",
      password: "adarshBalika123",
    };
    userSignIn(credential, navigate);
  };

  return (
    <div className="landingPageCard">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlpnKaIL-cjHY8fSCp1e6_I4sHGHOzJf8LS9KCWepCr1jacKPNt_WBuKDoHg9rxeGgghw&usqp=CAU" alt="landing"/>
      <div className="landing-container">
        <h1 className="landing-heading">ChirpChat</h1>
        <h3>Connecting people across the globe...</h3>

        <div>
          <NavLink to="/signup">
            <button className="landing-btn"> Join Now</button>
          </NavLink>

          <NavLink className="landing-signin-link" to="/signin">
            <p>Already have an account? </p>
          </NavLink>

          <p
            style={{ lineHeight: 0, marginTop: 0 }}
            className="guest"
            onClick={handleGuest}
          >
            Sign In as Guest
          </p>
        </div>
      </div>
    </div>
  );
};