import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FormInput, Button } from "./Styles";
import { BASE_URL } from "../constants";
import { setAuthToken } from '../cookie-helper';

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const inputsNotEmpty = email !== "" && password !== "";

  const logUser = async () => {
    if (inputsNotEmpty) {
      try {
        const data = { user: { email, password } };
        const response = await axios.post(`${BASE_URL}/users/sign_in`, data);
        console.log(response, "response from logged in users");
        const authToken = response.headers;
        // TODO: Access-Control-Expose-Headers: Authorization Bearer Token <--- need to be exposed
        setAuthToken(authToken);
        console.log(authToken, 'authToken');
      } catch (errors) {
        console.log(errors, "errors");
      }
    } else {
      alert("You must supply email and password to log in");
    }
  };

  const handleTextInput = (e) => {
    const { value, name } = e.target;
    console.log(value);
    if (name === "email") {
      setEmail(value);
    }
    if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <div>
      <h1>Log In</h1>
      <FormInput value={email} name="email" onChange={handleTextInput} />
      <FormInput value={password} name="password" onChange={handleTextInput} />
      <Button onClick={logUser} disabled={!inputsNotEmpty}>
        Submit
      </Button>
      <h4>
        New Here? <Link to={`/signup`}>Sign Up</Link>
      </h4>
    </div>
  );
};

export default LogIn;
