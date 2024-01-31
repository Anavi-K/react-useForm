import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [field, setField] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [submitted, setSubmit] = useState(false);
  const [validate, setValidation] = useState(false);

  const validateEmail = (email) => {
    return email.includes("@");
  };

  const validateName = (name) => {
    const nameRegex = /^[a-zA-Z.]{2,}$/;
    return nameRegex.test(name);
  };

  const validatePassword = (password) => {
    return password.length >= 4 && password.length <= 20;
  };

  return (
    <div className="form-container">
      <form
        className="register-form"
        onSubmit={(e) => {
          e.preventDefault();
          if (
            validateName(field.firstName) &&
            validateName(field.lastName) &&
            field.email &&
            validateEmail(field.email) &&
            field.password && 
            validatePassword(field.password)
          ) {
            setValidation(true);
          }
          setSubmit(true);
        }}
      >
        {submitted && validate ? (
          <div className="success-message">Registration successful!</div>
        ) : null}

        <input
          id="first-name"
          className="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
          value={field.firstName}
          onChange={(e) => {
            setField({ ...field, firstName: e.target.value });
          }}
        />
        {submitted && (!field.firstName || !validateName(field.firstName)) ? (
          <span>Please enter a valid first name</span>
        ) : null}

        <input
          id="last-name"
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={field.lastName}
          onChange={(e) => {
            setField({ ...field, lastName: e.target.value });
          }}
        />
        {submitted && (!field.lastName || !validateName(field.lastName)) ? (
          <span>Please enter a valid last name</span>
        ) : null}

        <input
          id="email"
          className="form-field"
          type="text"
          placeholder="Email"
          name="email"
          value={field.email}
          onChange={(e) => {
            setField({ ...field, email: e.target.value });
          }}
        />
        {submitted && !field.email ? <span>Please enter your email</span> : null}
        {submitted && field.email && !validateEmail(field.email) ? (
          <span>Please enter a valid email address</span>
        ) : null}

        <input
          id="password"
          className="form-field"
          type="password" 
          placeholder="Password"
          name="password"
          value={field.password}
          onChange={(e) => {
            setField({ ...field, password: e.target.value });
          }}
        />
        {submitted && (!field.password || !validatePassword(field.password)) ? (
          <span>Password must be between 4 and 20 characters</span>
        ) : null}

        <button className="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
