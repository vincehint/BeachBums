import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Signup = () => {
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('');
    let [confirmPassword, setConfirmPassword] = useState('');
    let [redirect, setRedirect] = useState(false);

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password === confirmPassword) {
            const newUser = { email, password }

            axios.post(`${REACT_APP_SERVER_URL}/api/signup`, newUser)
            .then(response => {
                console.log(response);
                setRedirect(true);
            })
            .catch(error => console.log(error));
        }
    }

    if (redirect) return <Redirect to="/home" />

    return (
        <div className="signUpOne">
            <div className="signUpPage">
                <div className="signUpContainer">
                    <div className="signUpBody">
                        <h2 className="signUpPara">Signup</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="signUpForm">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" value={email} onChange={handleEmail} className="formControl"/>
                            </div>
                            <div className="signUpForm">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" value={password} onChange={handlePassword} className="formControl"/>
                            </div>
                            <div className="signUpForm">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input type="password" name="confirmPassword" value={confirmPassword} onChange={handleConfirmPassword} className="formControl"/>
                            </div>
                            <div className="birthDate">
                                <label htmlFor="dateOfBirth">Birth Date</label>
                                <input type="date" name="birthday"  className="formControl"/>
                            </div>
                            <div>
                                <label htmlFor="location">Location</label>
                                <input type="location" name="location" className="formControls"/>
                            </div>
                            <div>
                                <label htmlFor="aboutMe">Tell Us a Little About Yourself...</label>
                                <input type="text" id="aboutMeBox" name="aboutMe" className="formControls"/>
                            </div>
                            <button type="submit" className="submitButtonSignUp">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Signup;
