import React, { useState } from 'react';

import { Link } from 'react-router-dom';

function Signup() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (event) => {
          event.preventDefault();

        console.log('FormData :',{name,email,password})
    }
    return (
        <div className="register">
            <form onSubmit={handleSubmit}>
                <h1>Register</h1>
                <input className='inputBox' value = {name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Enter Name'></input>
                <input className='inputBox' value = {email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Enter Email'></input>
                <input className='inputBox' value = {password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Enter Password'></input>
                <button className='appButton' type="submit">Sign Up</button>
            </form>
        </div>

    );
}

export default Signup;
