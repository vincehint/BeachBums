import { Redirect } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const EditProfile = (props) => {

    const [values, setValues] = useState({
            id: props.user.id,
            username: props.user.username,
            email: props.user.email,
            password: '',
            birthdate: props.user.birthdate,
            about: props.user.about,
            location: props.user.location,
            photo: props.user.photo
      })
      const [redirect,setRedirect] = useState(false)

    const handleChange = name => event => {
        const value = name === 'photo'
          ? event.target.type[0]
          : event.target.value
        setValues({...values, [name]: value })
    }

    // const photoUrl = values.id
    // ? `/api/photo/${values.id}?${new Date().getTime()}`
    // : '/api/users/defaultphoto'

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = values
        // { values.username, email, password, birthdate, location, about, photo }
        console.log(newUser)

        axios.post(`${REACT_APP_SERVER_URL}/api/profile/edit/`, newUser)
        .then(response => {
            console.log(response);
                setRedirect(true);
            })
            .catch(error => console.log(error));    
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
                                    <input type="text" name="username" value={values.username} onChange={handleChange('username')} className="formControl"></input>
                                </div>
                            </div>
                            <div className="signUpForm">
                                <label htmlFor="email">Email</label>
                                <div>
                                    <input type="email" name="email" value={values.email} onChange={handleChange('email')} className="formControl"/>
                                </div>
                            </div>
                            {/* <div className="signUpForm">
                                <label htmlFor="password">Password</label>
                                <div>
                                    <input type="text" name="password" value={values.password} onChange={handleChange('password')} className="formControl"/>
                                </div>
                            </div> */}
                            <div className="birthDate">
                                <label htmlFor="birthdate">Birth Date</label>
                                <div>
                                    <input type="text" name="birthdate" value={values.birthdate} onChange={handleChange('birthdate')} className="formControl"/>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="location">Location</label>
                                <div>
                                    <input type="text" name="location" value={values.location} onChange={handleChange('location')} className="formControl"/>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="aboutMe">Tell Us a Little About Yourself...</label>
                                <div>
                                    <input type="text" id="aboutMe" name="about" value={values.about} onChange={handleChange('about')} className="formControl"/>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="photo">Upload a Photo of Yourself</label>
                                <div>
                                    <input id="photo" name="photo" type="text" value={values.selectedPhoto} onChange={handleChange('photo')} className="formControl"/>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="password">Before submit, please add your password</label>
                                <div>
                                    <input type="text" id="password" name="password" value={values.password} onChange={handleChange('password')} className="formControl" required/>
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

export default EditProfile;   

