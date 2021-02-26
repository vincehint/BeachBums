import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Signup = (props) => {
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('');
    let [confirmPassword, setConfirmPassword] = useState('');
    let [username, setUsername] = useState('');
    let [redirect, setRedirect] = useState(false);
    let [age, setAge] = useState('');
    let [about, setAbout] = useState('');
    let [location, setLocation] = useState('');
    let [selectedPhoto, setSelectedPhoto] = useState([]);
    const handleUsername = (e) => {
        setUsername(e.target.value);
    }
    const handlePhoto = (e) => {
        setSelectedPhoto(e.target.value);
    }
    const handleAge = (e) => {
        setAge(e.target.value);
    }

    const handleAbout = (e) => {
        setAbout(e.target.value);
    }

    const handleLocation = (e) => {
        setLocation(e.target.value);
    }
    

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
                const { token } = response.data;
                // Save token to localStorage
                localStorage.setItem('jwtToken', token);
                // Set token to auth header
                setAuthToken(token);
                // Decode token to get the user data
                const decoded = jwt_decode(token);
                // Set current user
                props.nowCurrentUser(decoded);
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
                                <div>
                                    <input type="email" name="email" value={email} onChange={handleEmail} className="formControl"/>
                                </div>
                            </div>
                            <div className="signUpForm">
                                <label htmlFor="password">Password</label>
                                <div>
                                    <input type="password" name="password" value={password} onChange={handlePassword} className="formControl"/>
                                </div>
                            </div>
                            <div className="signUpForm">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <div>
                                    <input type="password" name="confirmPassword" value={confirmPassword} onChange={handleConfirmPassword} className="formControl"/>
                                </div>
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
