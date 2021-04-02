import React, { useState } from "react";
import axios from "axios";
import { StyledSignUp } from "./../styles/StyledSignUp";

const SingUp = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    firstName: "",
    secondName: "",
    phoneNumber: "",
    adress: "",
    postalCode: "",
  });

  const set = (propName) => {
    return ({ target: { value } }) => {
      setValues((oldValues) => ({ ...oldValues, [propName]: value }));
    };
  };

  async function makePostRequest(event) {
    event.preventDefault();
    const newRegisteredCustomer = {
      firstName: values.firstName,
      secondName: values.secondName,
      phoneNumber: values.phoneNumber,
      email: values.email,
      password: values.password,
      adress: values.adress,
      postalCode: values.postalCode,
    };

    await axios.post("http://localhost:5000/registration", newRegisteredCustomer);
  }

  return (
    <StyledSignUp>
      <form onSubmit={makePostRequest}>
        <p className="signIn_title">Sign Up!</p>
        <p className="signIn_subtitle"> It’s quick and easy.</p>

        <div className="input_wrapper">
          <input type="text" placeholder="Email" value={values.email} required minLength="5" onChange={set("email")} />

          <input type="text" placeholder="Password" value={values.password} required minLength="5" onChange={set("password")} />

          <input type="text" placeholder="First name" value={values.firstName} required minLength="3" onChange={set("firstName")} />

          <input type="text" placeholder="Last name" value={values.secondName} required minLength="3" onChange={set("secondName")} />

          <input type="number" placeholder="Phone number" value={values.phoneNumber} required minLength="5" onChange={set("phoneNumber")} />

          <input type="text" placeholder="Adress" value={values.adress} required minLength="5" onChange={set("adress")} />

          <input type="number" placeholder="Postal code" value={values.postalCode} required minLength="5" onChange={set("postalCode")} />

          <button className="submitButton" type="submit">
            Sing Up
          </button>
        </div>
      </form>
    </StyledSignUp>
  );
};

export default SingUp;
