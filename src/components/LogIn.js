import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormInput, Button } from './Styles';

const  LogIn = () => {
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    const handleTextInput= (e) => {
        const { value, name } = e.target;
        console.log(value)
        if (name === 'email') {
            setEmail(value);
        }
        if (name === 'password') {
            setPassword(value);
        }
    }
    
    return (
        <div>
            <h1>Log In</h1>
            <FormInput value={email} name="email" onChange={handleTextInput} />
            <FormInput value={password} name="password" onChange={handleTextInput} />
            <Button>Submit</Button>
            <h4>New Here?  <Link to={`/signup`}>Sign Up</Link></h4>
        </div>
    )
}

export default LogIn
