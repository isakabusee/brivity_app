import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormInput, Button } from './Styles';

const SignUp = () => {
    const[email, setEmail]= useState("");
    const[username, setUserName]= useState("");
    const[password, setPassword]= useState("");

    const handleInputChange = (e) => {
        const { value, name } = e.target;
        console.log(value);
        if (name === 'email') {
            setEmail(value);
        }
        if (name === 'username') {
            setUserName(value);
        }
        if (name === 'password') {
            setPassword(value);
        }
    }
    

    return (
        <div>
            <h1>Create Account</h1>
            <h4>Have an account? <Link to={`/login`}>Login</Link></h4>
            <FormInput value={email} name="email" onChange={handleInputChange} /><br/>
            <FormInput value={username} name="username" onChange={handleInputChange} /> <br/>
            <FormInput value={password} name="password" onChange={handleInputChange} /> <br/>
            <Button>Create Account</Button>
        </div>
    )
}

export default SignUp
