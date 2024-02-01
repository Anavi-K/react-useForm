import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";

export default function App() {
  const { register, handleSubmit, setValue, formState: { errors, isValid } } = useForm();
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const onSubmit = (data) => {
    console.log("Form data:", data);
    if (isValid) {
      setIsButtonClicked(true);
    } else {
      setIsButtonClicked(false);
    }
  };

  return (
    <div className="form-container">
      {isButtonClicked && isValid && (
        <div className="success-message">Registration successful!</div>
      )}

      <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
        <input
          id="first-name"
          className="form-field"
          type="text"
          placeholder="First Name"
          {...register("firstName", { required: true, pattern: /^[a-zA-Z.]{2,}$/ })}
        />
        {errors.firstName && (
          <span>Please enter a valid first name</span>
        )}

        <input
          id="last-name"
          className="form-field"
          type="text"
          placeholder="Last Name"
          {...register("lastName", { required: true, pattern: /^[a-zA-Z.]{2,}$/ })}
        />
        {errors.lastName && (
          <span>Please enter a valid last name</span>
        )}

        <input
          id="email"
          className="form-field"
          type="text"
          placeholder="Email"
          {...register("email", { required: true, pattern: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/ })}
        />
        {errors.email && (
          <span>Please enter a valid email address</span>
        )}

        <input
          id="password"
          className="form-field"
          type="password"
          placeholder="Password"
          {...register("password", { required: true, minLength: 4, maxLength: 20 })}
        />
        {errors.password && (
          <span>Password must be between 4 and 20 characters</span>
        )}

        <button className="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
