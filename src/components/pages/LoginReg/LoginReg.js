import React, { useState } from "react";
import "./LoginReg.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginReg = () => {
  const [newFirstname, setNewFirstname] = useState("");
  const [newLastname, setNewLastname] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [emptyFields, setEmptyFields] = useState(false);
  const [EmailAlreadyExists, setEmailAlreadyExists] = useState(false);
  const [userDontExist, setUserDontExist] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (newFirstname === "" || newEmail === "" || newPassword === "") {
      setEmptyFields(true);

      setTimeout(() => {
        setEmptyFields(false);
      }, 4000);
      return;
    }

    const userData = {
      newFirstname,
      newLastname,
      newEmail,
      newPassword,
    };
    axios
      .post("http://localhost:5000/api/register", userData)
      .then((res) => {
        setEmailAlreadyExists(res.data);
        setEmptyFields(false);
        setTimeout(() => {
          setEmailAlreadyExists(false);
        }, 4000);

        if (res.data === false) {
          setTimeout(() => {
            navigate("/");
          }, 2000);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const loginData = {
      loginEmail,
      loginPassword,
    };
    axios
      .post("http://localhost:5000/api/login", loginData)
      .then((res) => {
        if (res.data.UserDontExist === true) {
          setUserDontExist(true);
          setTimeout(() => {
            setUserDontExist(false);
          }, 4000);
          return;
        }

        if (res.data.UserEmail !== null) {
          setTimeout(() => {
            navigate("/");
          }, 2000);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="loginreg max-w-7xl m-auto">
      <div className="loginwrapper">
        <div className="loginleft">
          <h1>Login</h1>
          <div className="loginline"></div>
          <span className="welcome">Welcome back! Sign in to your account</span>
          {userDontExist === true ? (
            <p className="regemailerror bg-red-600">
              Email or password incorrect
            </p>
          ) : null}
          <form action="">
            <label htmlFor="username">Email address*</label>
            <input
              className="textfield"
              value={loginEmail}
              type="text"
              id="username"
              required
              onChange={(e) => setLoginEmail(e.target.value)}
            />
            <label htmlFor="password">Password*</label>
            <input
              className="textfield"
              type="text"
              value={loginPassword}
              id="password"
              required
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            <div className="checkdiv">
              <input type="checkbox" className="checkbox" id="checkbox" />
              <label htmlFor="checkbox">Remember me</label>
            </div>
            <button onClick={(e) => handleLogin(e)}>Log in</button>
          </form>
          <span className="passreset">Lost your password?</span>
        </div>
        <div className="logincenter">
          <div className="vertline"></div>
          <span className="or">or</span>
          <div className="vertline"></div>
        </div>
        <div className="loginright">
          <h1>Register</h1>
          <div className="loginline"></div>
          <span className="welcome">
            Create new account today to reap the benefits of a personalized
            shopping experience.
          </span>
          {EmailAlreadyExists === true ? (
            <p className="regemailerror bg-red-600">Email already in use</p>
          ) : null}
          {emptyFields === true ? (
            <p className="regemailerror bg-yellow-500">
              Please fill all the required fields
            </p>
          ) : null}
          <form action="">
            <label htmlFor="username">First Name*</label>
            <input
              className="textfield"
              type="text"
              value={newFirstname}
              id="username"
              required
              onChange={(e) => setNewFirstname(e.target.value)}
            />
            <label htmlFor="username">Last Name</label>
            <input
              className="textfield"
              type="text"
              value={newLastname}
              id="username"
              required
              onChange={(e) => setNewLastname(e.target.value)}
            />
            <label htmlFor="username">Email*</label>
            <input
              className="textfield"
              type="email"
              value={newEmail}
              id="email"
              required
              onChange={(e) => setNewEmail(e.target.value)}
            />
            <label htmlFor="password">Password*</label>
            <input
              className="textfield"
              type="text"
              vlaue={newPassword}
              id="password"
              required
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <button onClick={(e) => handleRegister(e)}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginReg;
