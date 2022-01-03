import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormInput, Button } from './Styles';
import axios from 'axios';
import { BASE_URL } from '../constants';


const SignUp = () => {
    const[email, setEmail]= useState("");
    const[display_name, setDisplay_name]= useState("");
    const[password, setPassword]= useState("");
    const inputsNotEmpty = email !== "" && password !== "" && display_name !== ""; 

    const createUser = async () => {
        if (inputsNotEmpty) {
            try {
                const data = {
                    user: { email: email, display_name: display_name, password: password }
                };
                const response = await axios.post(`${BASE_URL}/users`, data);
                console.log(response, "response from users we create");
            } catch (errors) {
                console.log(errors, "errors");
            }
    } else {
        alert("You must supply email, username, and password!");
    }
    };

    const handleInputChange = (e) => {
        const { value, name } = e.target;
        console.log(value);
        if (name === 'email') {
            setEmail(value);
        }
        if (name === 'display_name') {
            setDisplay_name(value);
        }
        if (name === 'password') {
            setPassword(value);
        }
    }
    

    return (
        <div>
            <h1>Create Account</h1>
            <h4>Have an account? <Link to={`/login`}>Login</Link></h4>
            <FormInput placeholder='Email' value={email} name="email" onChange={handleInputChange} /><br/>
            <FormInput placeholder='Display Name' value={display_name} name="display_name" onChange={handleInputChange} /> <br/>
            <FormInput placeholder='Password' value={password} name="password" onChange={handleInputChange} /> <br/>
            <Button onClick={createUser} disabled={!inputsNotEmpty}>Create Account</Button>
        </div>
    )
}

export default SignUp;
