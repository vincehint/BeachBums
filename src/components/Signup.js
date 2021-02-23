import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Signup = () => {
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
                setRedirect(true);
            })
            .catch(error => console.log(error));
        }
    }

    if (redirect) return <Redirect to="/profile" />

    return (
        <div className="signUpOne">
            <div className="signUpPage">
                <div className="signUpContainer">
                    <div className="signUpBody">
                        <h2 className="signUpPara">Signup</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="signUpForm">
                                <label htmlFor="name">Name</label>
                                <div>
                                    <input type="name" name="name" value={username} onChange={handleUsername} className="formControl"></input>
                                </div>
                            </div>
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
                            <div className="birthDate">
                                <label htmlFor="age">Birth Date</label>
                                <div>
                                    <input type="date" name="age" value={age} onChange={handleAge} className="formControl"/>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="location">Location</label>
                                <div>
                                    <input type="text" name="location" value={location} onChange={handleLocation} className="formControl"/>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="aboutMe">Tell Us a Little About Yourself...</label>
                                <div>
                                    <input type="text" id="aboutMeBox" name="aboutMe" value={about} onChange={handleAbout} className="formControl"/>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="photo">Upload a Photo of Yourself</label>
                                <div>
                                    <input id="photoUpload" type="file" value={selectedPhoto} onChange={handlePhoto} className="formControl"/>
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
