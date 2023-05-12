import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import "./styles/LoginPage.css";
import Logo from "../assets/images/alba-logo.png";

export const LoginPage = () => {
  document.title = "Login";
  const navigate = useNavigate();
  const [cookies, setCookies] = useCookies();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (email && password) {
      if (email !== "eve.holt@reqres.in") {
        alert("WRONG EMAIL");
      } else {
        await axios
          .post(
            "https://reqres.in/api/login",
            {
              email: email,
              password: password,
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
          .then((res) => {
            setCookies("token", res.data.token, "/");
            navigate("/profile");
          });
      }
    } else {
      if (email == "") {
        alert("EMPTY EMAIL");
      } else {
        alert("EMPTY PASSWORD");
      }
    }
  };

  return (
    <div>
      <div className="login-container">
        <form onSubmit={(e) => handleLogin(e)}>
          <div className="imgcontainer">
            <img src={Logo} alt="logo" className="login" />
          </div>

          <div className="container">
            <label htmlFor="uname">
              <b>Username</b>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              name="uname"
              required
              onChange={(e) => handleEmail(e)}
            />

            <label htmlFor="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
              onChange={(e) => handlePassword(e)}
            />

            <label>
              <input type="checkbox" name="remember" /> Remember Me
            </label>
            <button type="submit">Login</button>
          </div>

          <div className="container">
            <button type="button" className="cancelbtn">
              Cancel
            </button>
            <span className="psw">
              Forgot <a href="#">password?</a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};
