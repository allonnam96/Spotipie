import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [stage, setStage] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [errors, setErrors] = useState([]);
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [birthMonth, setBirthMonth] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [gender, setGender] = useState("");
  const [passwordHidden, hidePassword] = useState();
  const dob = `${birthYear}-${String(birthMonth).padStart(2, '0')}-${String(birthDay).padStart(2, '0')}`;

  if (sessionUser) return <Redirect to="/" />;

  const GENDERS = ["Man", "Woman", "Non-binary", "Something else", "Prefer not to say"];

  const validateEmail = (email) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation before submission
    const currentErrors = [];
    if (stage === 1 && !validateEmail(email)) {
      currentErrors.push(`This email is invalid. Make sure it's written like example@email.com`);
    } else if (stage === 2 && password.length < 8) {
      currentErrors.push(`Password should contain at least 8 characters.`);
    } else if (stage === 3 && !username) {
      currentErrors.push(`Username missing`);
    }
  
    if (currentErrors.length) {
      setErrors(currentErrors);
      return;
    }
  
    if (stage < 3) {
      setStage(prev => prev + 1);
      setErrors([]);
    } else {
      // Attempt to sign up the user
      dispatch(sessionActions.signup({ email, username, password}))
        .then(() => {
          // Handle successful signup here if needed
        })
        .catch(async (res) => {
          // Handle errors from the signup process
          const data = await res.json();
          if (data && data.errors) {
            setErrors(data.errors.map(error => error.message || error));
          } else {
            setErrors(['An unexpected error occurred. Please try again.']);
          }
        });
    }
  };
  



  const goBack = () => {
    setStage(stage > 1 ? stage - 1 : 1);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  }

  const renderStage = () => {
    switch (stage) {
      case 1:
        return (
          <>
            <h1>Sign up to start listening</h1>
            <label>
              Email address
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@domain.com"
                required
              />
            </label>
            <button className="user-auth-button" type="button" onClick={handleSubmit}>Next</button>
          </>
        );
      case 2:
        return (
          <>
            <div id="signup-header">
              <div className="back-arrow" onClick={goBack}></div>
              <div>
                <p>Step 1 of 2</p>
                <p>Create a password</p>
              </div>
            </div>
            <label className="password-label">
              Password
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {/* <div>hide</div> */}
            </label>
            <p className="directions">
              The password must contain at least 8 characters.
              We recommend including at least 1 number and 1 special character.
            </p>
            <button className="user-auth-button" type="button" onClick={handleSubmit}>Next</button>
          </>
        );
      case 3:
        return (
          <>
            <div id="signup-header">
              <div className="back-arrow" onClick={goBack}></div>
              <div>
                <p>Step 2 of 2</p>
                <p>Tell us about yourself</p>
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <label>
                Name
                <p className="directions">This name will appear on your profile</p>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                {errors.some(e => e.includes("username")) && <p className="error">Enter a name for your profile.</p>}
              </label>
              <label>
                Date of birth
                <p className="directions">Why do we need your date of birth? Learn more.</p>
                <div className="date-of-birth">
                  <div className="select">
                    <select
                      value={birthMonth}
                      onChange={(e) => setBirthMonth(e.target.value)}
                      required
                    >
                      <option value="">Month</option>
                      {/* Generate month options */}
                      {Array.from({ length: 12 }, (v, i) => (
                        <option key={`month-${i + 1}`} value={i + 1}>
                          {new Date(0, i).toLocaleString('default', { month: 'long' })}
                        </option>
                      ))}
                    </select>
                    <div className="down-arrow"></div>
                  </div>
                  <input
                    type="text"
                    placeholder="dd"
                    value={birthDay}
                    onChange={(e) => setBirthDay(e.target.value)}
                    maxLength="2"
                    required
                  />
                  <input
                    type="text"
                    placeholder="yyyy"
                    value={birthYear}
                    onChange={(e) => setBirthYear(e.target.value)}
                    maxLength="4"
                    required
                  />
                </div>
                {!birthMonth || !birthDay || !birthYear ? (
                  <p className="error">Please enter your date of birth.</p>
                ) : null}
              </label>

              <p>Gender</p>
              <p className="directions">We use your gender to help personalize our content recommendations and ads for you.</p>
              {GENDERS.map(genderOption => {
                return (
                  <label className="gender-option">
                  <p className={gender === genderOption ? "selected" : ""}
                    onClick={(e) => setGender(genderOption)}>{genderOption}</p>
                </label>
                )
              })}

              <button className="user-auth-button" type="button" onClick={handleSubmit}>Sign up</button>
            </form>
          </>
        );
    }
  };

  return (
    <div id="signup">

      <form onKeyDown={handleEnter}>
        {errors.map((error, index) => <div key={index} className="error">{error}</div>)}
        {renderStage()}
      </form>
    </div>
  );
}

export default SignupFormPage;
