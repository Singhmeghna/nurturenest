import * as React from "react";
import loginbg from "../assets/raw/loginbg1.png";
import { useState } from "react";

export default function Register() {
  const [activeStep, setActiveStep] = useState(1);

  // Create an object to store input field values in the state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    Gender: "",
    mobile: "",
    email: "",
    mobile2: "",
    password: "",
    confirmPassword: "",
    cardExpiry: "",
  });

  const handleNext = () => {
    if (activeStep < 4) {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    if (activeStep > 1) {
      setActiveStep(activeStep - 1);
    }
  };

  // Update the state for a specific input field
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <React.Fragment>
      <img
        className="wave"
        src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/master/img/wave.png"
        alt="Wave"
      />
      <div className="container">
        <div className="img">
          <img src={loginbg} alt="Login Background" />
        </div>
        <div className="login-content">
          <div>
            <div className="container">
              <div className="row justify-content-center login-container">
                <div className="col-md-8">
                  <div className="page-ath-wrap">
                    <div className="page-ath-content register-form-content">
                      <div className="page-ath-form">
                        <div className="form-align-box">
                          <div className="wizard">
                            <div
                              className="progress"
                              style={{ height: "30px" }}
                            >
                              <div
                                className="progress-bar progress-bar-striped progress-bar-animated"
                                role="progressbar"
                                aria-valuenow={activeStep}
                                aria-valuemin={1}
                                aria-valuemax={4}
                                style={{ width: `${activeStep * 25}%` }}
                              >
                                Step {activeStep} of 4
                              </div>
                            </div>
                            <form
                              role="form"
                              action="index.html"
                              className="register-wizard-box"
                              style={{ textAlignLast: "center" }}
                            >
                              <div className="tab-content" id="main_form">
                                <div
                                  className="tab-pane"
                                  role="tabpanel"
                                  style={{ display: "block" }}
                                  id={`step${activeStep}`}
                                >
                                  {activeStep === 1 && (
                                    <div className="form-input-steps">
                                      <h3>Register</h3>
                                      <h3>Personal information</h3>
                                      <br></br>
                                      <div
                                        className="form-group"
                                        style={{ display: "flex" }}
                                      >
                                        <label
                                          style={{
                                            alignSelf: "center",
                                            marginRight: "15px",
                                            fontSize: "24px",
                                          }}
                                        >
                                          <i className="fa fa-user"></i>
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          name="firstName"
                                          placeholder="first name"
                                          value={formData.firstName}
                                          onChange={handleInputChange}
                                        />
                                      </div>
                                      <div
                                        className="form-group"
                                        style={{ display: "flex" }}
                                      >
                                        <label
                                          style={{
                                            alignSelf: "center",
                                            marginRight: "15px",
                                            fontSize: "24px",
                                          }}
                                        >
                                          <i className="fa fa-user"></i>
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          name="lastName"
                                          placeholder="last name"
                                          value={formData.lastName}
                                          onChange={handleInputChange}
                                        />
                                      </div>
                                      <div
                                        className="form-group"
                                        style={{ display: "flex" }}
                                      >
                                        <label
                                          style={{
                                            alignSelf: "center",
                                            marginRight: "15px",
                                            fontSize: "24px",
                                          }}
                                        >
                                          <i className="fa-solid fa-person-half-dress"></i>{" "}
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          name="Gender"
                                          placeholder="Gender"
                                          value={formData.Gender}
                                          onChange={handleInputChange}
                                        />
                                      </div>
                                    </div>
                                  )}
                                  {activeStep === 2 && (
                                    <div className="form-input-steps">
                                      <h3>Register</h3>
                                      <h3>Contact information</h3>
                                      <br></br>
                                      <div
                                        className="form-group"
                                        style={{ display: "flex" }}
                                      >
                                        <label
                                          style={{
                                            alignSelf: "center",
                                            marginRight: "15px",
                                            fontSize: "24px",
                                          }}
                                        >
                                          <i className="fa fa-mobile"></i>{" "}
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          name="mobile"
                                          placeholder="mobile number"
                                          value={formData.mobile}
                                          onChange={handleInputChange}
                                        />
                                      </div>
                                      <div
                                        className="form-group"
                                        style={{ display: "flex" }}
                                      >
                                        <label
                                          style={{
                                            alignSelf: "center",
                                            marginRight: "15px",
                                            fontSize: "24px",
                                          }}
                                        >
                                          <i className="fa fa-envelope"></i>{" "}
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          name="email"
                                          placeholder="email address"
                                          value={formData.email}
                                          onChange={handleInputChange}
                                        />
                                      </div>
                                      <div
                                        className="form-group"
                                        style={{ display: "flex" }}
                                      >
                                        <label
                                          style={{
                                            alignSelf: "center",
                                            marginRight: "15px",
                                            fontSize: "24px",
                                          }}
                                        >
                                          <i className="fa fa-mobile"></i>{" "}
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          name="mobile2"
                                          placeholder="mobile number (Optional)"
                                          value={formData.mobile2}
                                          onChange={handleInputChange}
                                        />
                                      </div>
                                    </div>
                                  )}
                                  {activeStep === 3 && (
                                    <div className="form-input-steps">
                                      <h3>Register</h3>
                                      <h3>Create password</h3>
                                      <br></br>
                                      <div
                                        className="form-group"
                                        style={{ display: "flex" }}
                                      >
                                        <label
                                          style={{
                                            alignSelf: "center",
                                            marginRight: "15px",
                                            fontSize: "24px",
                                          }}
                                        >
                                          <i className="fa fa-lock"></i>
                                        </label>
                                        <input
                                          type="password"
                                          className="form-control"
                                          name="password"
                                          placeholder="Create password"
                                          value={formData.password}
                                          onChange={handleInputChange}
                                        />
                                      </div>
                                      <div
                                        className="form-group"
                                        style={{ display: "flex" }}
                                      >
                                        <label
                                          style={{
                                            alignSelf: "center",
                                            marginRight: "15px",
                                            fontSize: "24px",
                                          }}
                                        >
                                          <i className="fa fa-lock"></i>
                                        </label>
                                        <input
                                          type="password"
                                          className="form-control"
                                          name="confirmPassword"
                                          placeholder="Confirm password"
                                          value={formData.confirmPassword}
                                          onChange={handleInputChange}
                                        />
                                      </div>
                                    </div>
                                  )}
                                  {activeStep === 4 && (
                                    <div className="form-input-steps">
                                      <h3>Register</h3>
                                      <h3>Health information</h3>
                                      <br></br>
                                      <div
                                        className="form-group"
                                        style={{ display: "flex" }}
                                      >
                                        <label
                                          style={{
                                            alignSelf: "center",
                                            marginRight: "15px",
                                            fontSize: "24px",
                                          }}
                                        >
                                          <i className="fa fa-calendar"></i>{" "}
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          id="card-month-year"
                                          name="cardExpiry"
                                          placeholder="MM/YY"
                                          value={formData.cardExpiry}
                                          onChange={handleInputChange}
                                        />
                                      </div>
                                      <div
                                        className="form-group"
                                        style={{ display: "flex" }}
                                      >
                                        <div className="custom-control custom-checkbox">
                                          <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="customCheck1"
                                          />
                                          <label
                                            className="custom-control-label"
                                            htmlFor="customCheck1"
                                          >
                                            I agree to all{" "}
                                            <a href="javascript:void(0)">
                                              Terms & Conditions
                                            </a>
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                  <ul className="list-inline text-right">
                                    <li>
                                      {activeStep > 1 && (
                                        <button
                                          type="button"
                                          className="step-btn prev-step"
                                          onClick={handleBack}
                                        >
                                          <i className="fa fa-chevron-left"></i>
                                          <span>Back</span>
                                        </button>
                                      )}
                                    </li>
                                    <li>
                                      {activeStep < 4 ? (
                                        <button
                                          type="button"
                                          className="step-btn next-step"
                                          onClick={handleNext}
                                        >
                                          <span>Next</span>
                                          <i className="fa fa-chevron-right"></i>
                                        </button>
                                      ) : (
                                        <button
                                          type="button"
                                          className="step-btn finish-step"
                                        >
                                          <span>Finish</span>
                                        </button>
                                      )}
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
