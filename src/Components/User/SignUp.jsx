/* eslint-disable react/prop-types */
import { Modal, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import "./SignUp.css";
import { LuEye, LuEyeOff } from "react-icons/lu";

const SignUp = ({ show, handleClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isSigningUp, setIsSigningUp] = useState(true);

  const toggleSignInSignUp = () => {
    setIsSigningUp((prevState) => !prevState);
  };

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.matchMedia("(max-width: 992px)").matches);
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleSignUp = () => {
    console.log("For now this does nothing");
  };

  return (
    <Modal size="lg" show={show} onHide={handleClose} centered>
      <svg
        onClick={handleClose}
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        className="custom-cross-button"
        style={{
          zIndex: "1050",
        }}
      >
        <g clipPath="url(#clip0_1_2255)">
          <path
            d="M14 2.33331C7.54838 2.33331 2.33337 7.54831 2.33337 14C2.33337 20.4516 7.54838 25.6666 14 25.6666C20.4517 25.6666 25.6667 20.4516 25.6667 14C25.6667 7.54831 20.4517 2.33331 14 2.33331ZM19.8334 18.1883L18.1884 19.8333L14 15.645L9.81171 19.8333L8.16671 18.1883L12.355 14L8.16671 9.81164L9.81171 8.16665L14 12.355L18.1884 8.16665L19.8334 9.81164L15.645 14L19.8334 18.1883Z"
            fill={isSmallScreen ? "#8A8A8A" : "white"}
          />
        </g>
        <defs>
          <clipPath id="clip0_1_2255">
            <rect width="28" height="28" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <div
        className="text-center py-3 rounded-top d-none d-lg-block"
        style={{ backgroundColor: "#EFFFF4", color: "#008A45" }}
      >
        Let&rsquo;s learn, share & inspire each other with our passion for
        computer engineering. Sign up now 🤘🏼
      </div>
      <Modal.Body>
        <div className="d-flex justify-content-between align-items-center mx-3 ">
          {isSigningUp ? (
            <h2 className="py-2 mb-3 custom-modal-title d-none d-lg-block">
              Create Account
            </h2>
          ) : (
            <h2 className="py-2 mb-3 custom-modal-title d-none d-lg-block">
              Sign In
            </h2>
          )}

          <p className="d-none d-lg-block">
            {isSigningUp
              ? "Already have an account?"
              : "Don't have an account yet?"}{" "}
            <span
              className=""
              style={{
                color: "#2F6CE5",
                cursor: "pointer",
              }}
              onClick={toggleSignInSignUp}
            >
              {isSigningUp ? "Sign In" : "Create new for free!"}
            </span>
          </p>
        </div>
        <div className="row mx-1">
          <form className="col-12 col-lg-6 d-flex align-items-center justify-content-center justify-content-lg-between ">
            <div className="mb-3">
              <div className="py-2 mb-3 custom-modal-title d-lg-none">
                {isSigningUp ? "Create Account" : "Welcome Back!"}
              </div>
              {isSigningUp && (
                <div className="d-flex">
                  <input
                    type="text"
                    className="form-control bg-custom"
                    placeholder="First Name"
                    id="first-name"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="text"
                    className="form-control bg-custom"
                    placeholder="Last Name"
                    id="last-name"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              )}

              <input
                type="email"
                className="form-control bg-custom"
                placeholder="Email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ minWidth: "320px" }}
              />
              <div className="position-relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control bg-custom"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div
                  className="show-password-icon"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <LuEye style={{ color: "#8A8A8A", cursor: "pointer" }} />
                  ) : (
                    <LuEyeOff style={{ color: "#8A8A8A", cursor: "pointer" }} />
                  )}
                </div>
              </div>
              {isSigningUp && (
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control bg-custom"
                  id="confirm-password"
                  placeholder="Confirm Password"
                />
              )}

              <div className="d-flex justify-space-between gap-5 align-items-center">
                <Button
                  variant="primary"
                  className=" custom-login-btn rounded-pill mb-4 mt-3 py-2 custom-btn-font-size"
                  onClick={handleSignUp}
                >
                  {isSigningUp ? "Create Account" : "Sign In"}
                </Button>
                <div
                  className="d-lg-none text-nowrap ms-auto custom-btn-font-size "
                  style={{ textDecoration: "underline", cursor: "pointer" }}
                  onClick={toggleSignInSignUp}
                >
                  {isSigningUp ? "or, Sign In" : "or, Create Account"}
                </div>
              </div>

              <Button
                variant="light"
                className="w-100 border py-2 d-flex gap-1 align-items-center justify-content-center custom-btn-font-size"
              >
                <img src="../../../public/f_logo_RGB-Blue_1024.png" alt="" />
                Sign up with Facebook
              </Button>
              <Button
                variant="light"
                className="w-100 border py-2 mt-2 d-flex gap-1 align-items-center justify-content-center custom-btn-font-size"
              >
                <img src="../../../public/google_search.png" alt="" />
                Sign up with Google
              </Button>
              {isSigningUp || (
                <div
                  className="mx-auto text-center mt-3"
                  style={{ fontSize: "12px", cursor: "pointer" }}
                >
                  Forgot Password?
                </div>
              )}
            </div>
          </form>{" "}
          <div className="col-lg-6 col-12 d-lg-flex flex-column justify-content-center mx-auto">
            <img
              className="d-none d-lg-block"
              src="../../../public/atg_illustration.png"
              alt=""
            />
            <div
              className="text-center custom-width mx-auto"
              style={{ fontSize: "11px" }}
            >
              {isSigningUp &&
                "By signing up, you agree to our Terms & conditions, Privacy policy"}
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default SignUp;
