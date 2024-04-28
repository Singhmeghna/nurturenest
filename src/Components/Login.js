import * as React from "react";
import loginbg from "../assets/raw/loginbg1.png";

import PregnantWoman from "@mui/icons-material/PregnantWoman";

export default function Login() {
  return (
    <React.Fragment>
      <img
        className="wave"
        src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/master/img/wave.png"
      />
      <div className="container">
        <div className="img">
          <img src={loginbg} />
        </div>
        <div className="login-content">
          <div className="login-container">
            <form>
              <img src="" />
              <h2 className="title" style={{ color: "#555" }}>
                Nurture Nest
              </h2>
              <span style={{ color: "#555" }}>
                <PregnantWoman style={{ verticalAlign: "top" }} />
                Your Pregnancy Companion
              </span>
              <br></br>
              <br></br>
              <br></br>
              <div className="input-div one">
                <div className="i">
                  <i className="fas fa-user" style={{ color: "#555" }}></i>
                </div>
                <div className="div">
                  <input
                    type="text"
                    className="input"
                    placeholder="Username"
                    style={{ color: "#555" }}
                  />
                </div>
              </div>
              <div className="input-div pass">
                <div className="i">
                  <i className="fas fa-lock" style={{ color: "#555" }}></i>
                </div>
                <div className="div">
                  <input
                    type="password"
                    className="input"
                    placeholder="Password"
                    style={{ color: "#555" }}
                  />
                </div>
              </div>
              <a href="#">Forgot Password?</a>
              <input type="submit" className="btn" value="Login" />

              <input type="submit" className="btn" value="Register" />
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
