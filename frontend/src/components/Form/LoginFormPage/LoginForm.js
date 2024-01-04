import React, { useState } from "react";
import * as sessionActions from "../../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import './LoginForm.css';

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const DEMO_USER_CREDENTIALS = {
    credential: 'Demo',
    password: 'password'
  }

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        let data;
        try {
          data = await res.clone().json();
        } catch {
          data = await res.text();
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      });
  };

  const handleDemoLogin = (e) => {
    e.preventDefault();
    setErrors([]);
    dispatch(sessionActions.login(DEMO_USER_CREDENTIALS))
      .catch(async (res) => {
        let data;
        try {
          data = await res.clone().json();
        } catch {
          data = await res.text();
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      });
  };


  return (
    <div className="gradient-background">
      <div id="login">
        <h1>Log in to Spotipie</h1>
        <ul id="my-contacts">
          <a href="https://www.linkedin.com/in/hyun-jun96/" target="_blank" rel="noopener noreferrer" className="contact-item">LinkedIn</a>
          <a href="https://github.com/allonnam96" target="_blank" rel="noopener noreferrer" className="contact-item">Github</a>
          <a href="https://allon-porfolio.vercel.app/" target="_blank" rel="noopener noreferrer" className="contact-item">Portfolio</a>
        </ul>
        <hr />
        <form onSubmit={handleSubmit}>
          <ul>
            {errors.map(error => <li key={error}>{error}</li>)}
          </ul>
          <label>
            Email or username
            <input
              type="text"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              placeholder="Email or username"
              required
            />
          </label>
          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </label>
          <button className="user-auth-button" type="submit">Log In</button>
          <button className="user-auth-button" onClick={handleDemoLogin}>Demo</button>
        </form>
        <hr />
        <div id="signup">
          <span>Don't have an account? &nbsp;<Link to="/signup">Sign up for Spotipie</Link></span>
        </div>
      </div>
    </div>
  );
}

export default LoginFormPage;