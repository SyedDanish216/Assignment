import React, { useState } from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
export const Signup = () => {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);
  const [morethanten,setMorethanten]=useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
    mobile: "",
  });
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    if(name==="mobile")
    {
        if (e.target.value.length > 10)
        setMorethanten(true);
        else
        setMorethanten(false);
    }
    setUser({ ...user, [name]: value });
  };
  //For validations - required field message below every field
  const [ischecked, setIschecked] = useState(true);
  const [isName, setIsName] = useState(true);
  const [isEmail, setIsEmail] = useState(true);
  const [isPassword, setIsPassword] = useState(true);
  const [isCPassword, setIsCPassword] = useState(true);
  const [isMobile, setIsMobile] = useState(true);
  const handleCheck = () => {
    setChecked(!checked);
    setIschecked(true);
  };
  const Signup = () => {
    setIschecked(true);
    setIsName(true);
    setIsEmail(true);
    setIsPassword(true);
    setIsCPassword(true);
    setIsMobile(true);

    if (!checked) setIschecked(false);
    if (!user.name) setIsName(false);
    if (!user.email) setIsEmail(false);
    if (!user.password) setIsPassword(false);
    if (!user.cpassword) setIsCPassword(false);
    if (!user.mobile) setIsMobile(false);

    if (user.password !== user.cpassword) alert("Passwords are not matching");
    if (
      !checked ||
      !user.name ||
      !user.email ||
      !user.password ||
      !user.cpassword ||
      !user.mobile
    )
      return;
    else navigate("/bargraph");
  };

  return (
    <div className="signup">
      <div className="signupbox">
        <div className="signupright">
          <div className="signupimage">
            <img
              src="https://images.pexels.com/photos/3127880/pexels-photo-3127880.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="..."
            />
          </div>
        </div>
        <div className="signupleft">
          <div className="signupcontent">
            <div>
              <span className="heading">Create an account</span>
            </div>
            {/* <div style={{ marginTop: "10px", marginBottom: "20px" }}>
              <span>Don't have an account?</span>
            </div> */}
            <div className="mt-4">
              <div className="mb-3">
                <div>
                  <span>Your email address</span>
                </div>
                <div className="inputstyle">
                  <input
                    type="email"
                    value={user.email}
                    onChange={handleInputs}
                    name="email"
                  />
                </div>
                {!isEmail && (
                  <div
                    style={{
                      alignItems: "flex-start",
                      textAlign: "left",
                      fontSize: "12px",
                      color: "#EA5455",
                    }}
                  >
                    <span>email is required</span>
                  </div>
                )}
              </div>

              <div className="mb-3">
                <div>
                  <span>Your password</span>
                </div>

                <div className="inputstyle">
                  <input
                    type="password"
                    value={user.password}
                    onChange={handleInputs}
                    name="password"
                  />
                </div>
                {!isPassword && (
                  <div
                    style={{
                      alignItems: "flex-start",
                      textAlign: "left",
                      fontSize: "12px",
                      color: "#EA5455",
                    }}
                  >
                    <span>password is required</span>
                  </div>
                )}
              </div>

              <div className="mb-3">
                <div>
                  <span>Confirm your password</span>
                </div>

                <div className="inputstyle">
                  <input
                    type="password"
                    value={user.cpassword}
                    onChange={handleInputs}
                    name="cpassword"
                  />
                </div>
                {!isCPassword && (
                  <div
                    style={{
                      alignItems: "flex-start",
                      textAlign: "left",
                      fontSize: "12px",
                      color: "#EA5455",
                    }}
                  >
                    <span>confirm password is required</span>
                  </div>
                )}
              </div>

              <div className="mb-3">
                <div>
                  <span>Your full name</span>
                </div>

                <div className="inputstyle">
                  <input
                    type="text"
                    value={user.name}
                    onChange={handleInputs}
                    name="name"
                  />
                </div>
                {!isName && (
                  <div
                    style={{
                      alignItems: "flex-start",
                      textAlign: "left",
                      fontSize: "12px",
                      color: "#EA5455",
                    }}
                  >
                    <span>full name is required</span>
                  </div>
                )}
              </div>

              <div className="mb-3">
                <div>
                  <span>Your phone number</span>
                </div>

                <div className="inputstyle">
                  <input

                    type="number"
                    pattern="[0-9]{5}"
                    value={user.mobile}
                    onChange={handleInputs}
                    name="mobile"
                    
                  />
                </div>
                {!isMobile && (
                  <div
                    style={{
                      alignItems: "flex-start",
                      textAlign: "left",
                      fontSize: "12px",
                      color: "#EA5455",
                    }}
                  >
                    <span>mobile is required</span>
                  </div>
                )}
                {morethanten && (
                  <div
                    style={{
                      alignItems: "flex-start",
                      textAlign: "left",
                      fontSize: "12px",
                      color: "#EA5455",
                    }}
                  >
                    <span>Digits can't be more than 10</span>
                  </div>
                )}
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                }}
                className="m-1 form-check"
              >
                <div>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    onChange={handleCheck}
                    style={{
                      cursor: "pointer",
                      borderColor: !ischecked ? "#EA5455" : "",
                    }}
                  />
                </div>

                <div>
                  <label className="form-check-label" for="terms">
                    <span style={{ color: !ischecked ? "#EA5455" : "black" }}>
                      I agree to
                    </span>
                    <span className="ms-2">privacy policy & terms</span>
                  </label>
                </div>
              </div>

              <div
                style={{
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                <button
                  style={{
                    backgroundColor: "#0984e3",
                    color: "white",
                    width: "100%",
                    height: "44px",
                    borderRadius: "10px",
                    border: "none",
                    fontSize: "15px",
                  }}
                  className="point"
                  onClick={Signup}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
