import React from "react";
import style from "./index.module.css";

const Login = () => {
  const handleGoogleLogin = () => {
    console.log("Google login clicked");
  };

  return (
    <div className={style.loginContainer}>
      <h1>Google Auth</h1>
      <div className={style.loginBox}>
        <h2>Login</h2>

        <button className={style.googleBtn} onClick={handleGoogleLogin}>
          <img
            src="https://developers.google.com/identity/images/g-logo.png"
            alt="Google Logo"
            className={style.googleLogo}
          />
          Continue with Google
        </button>

        <div className={style.separator}>
          <span>or</span>
        </div>
        <form className={style.loginForm}>
          <input
            type="email"
            placeholder="Email"
            className={style.inputField}
          />
          <input
            type="password"
            placeholder="Password"
            className={style.inputField}
          />
          <button className={style.submitBtn}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
