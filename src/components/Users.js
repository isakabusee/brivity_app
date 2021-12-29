import axios from "axios";
import React, { useState, useEffect } from "react";
import { BASE_URL } from "../constants";

const Users = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createdUser, setCreatedUser] = useState({"id":3,"display_name":"Izzo"})
  const inputsNotEmpty = email !== "" && password !== "";

  const createUser = async () => {
    if (inputsNotEmpty) {
      try {
        let headers = new Headers();
        headers.append("Access-Control-Allow-Origin", "http://localhost:3000");
        headers.append("Access-Control-Allow-Credentials", "true");
        const config = { headers };
        const data = {
          user: { email: email, password: password, display_name: "Batman" },
        };
        const response = await axios.post(`${BASE_URL}/users`, data, config);
        console.log(response, "response from user creation");
      } catch (errors) {
        console.log(errors, "errors");
      }
    } else {
      alert("Must supply email and password!");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    }
    if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <>
      <input name="email" placeholder="Email" onChange={handleInputChange} />
      <input
        name="password"
        placeholder="Password"
        onChange={handleInputChange}
      />
      <button onClick={createUser} disabled={!inputsNotEmpty}>
        Create Account
      </button>
    </>
  );
};

export default Users;
