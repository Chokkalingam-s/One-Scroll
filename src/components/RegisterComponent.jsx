
import React, { useState } from "react";
import { RegisterAPI } from "../api/AuthAPI";
import { postUserData } from "../api/FirestoreAPI";
import OneScrollLoginImg from "../assets/OneScroll-login.png"
import { useNavigate } from "react-router-dom";
import { getUniqueID } from "../helpers/getUniqueId";
import "../Sass/LoginComponent.scss";
import { toast } from "react-toastify";

export default function RegisterComponent() {
  let navigate = useNavigate();
  const [credentails, setCredentials] = useState({});
  const register = async () => {
    try {
      let res = await RegisterAPI(credentails.email, credentails.password);
      toast.success("Account Created!");
      postUserData({
        userID: getUniqueID(),
        name: credentails.name,
        email: credentails.email,
        imageLink:
          "https://www.seekpng.com/png/detail/429-4294717_ic-user-phone-comments-yoga-icon-png.png",
      });
      navigate("/home");
      localStorage.setItem("userEmail", res.user.email);
    } catch (err) {
      console.log(err);
      toast.error("Cannot Create your Account");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
      <img src={OneScrollLoginImg} className="LoginImg" />

      <div className="login-wrapper-inner">
      <h1 className="heading">Sign Up</h1>
        <p className="sub-heading">Make your professional life Better!</p>
        <div className="auth-inputs">
          <input onChange={(event) =>setCredentials({ ...credentails, name: event.target.value })}
            type="text" className="common-input" placeholder="Your Name"/>
          <input onChange={(event) =>setCredentials({ ...credentails, email: event.target.value })}
            type="email" className="common-input" placeholder="Email or phone number"/>
          <input onChange={(event) =>setCredentials({ ...credentails, password: event.target.value })}
            type="password" className="common-input" placeholder="Password (6 or more characters)" />
        </div>
        <button onClick={register} className="login-btn">Agree & Join</button>
      
      <hr class="hr-text" />
      <div className="google-btn-container">
        <p className="go-to-signup">
          Already on One-Scroll?{" "}
          <span className="join-now" onClick={() => navigate("/")}>
            Sign in
          </span>
        </p>
      </div>
      </div>
    </div>
    </div>
  );
}
