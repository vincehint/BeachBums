import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Profile = (props) => {
    console.log(props);
    // const [redirect,setRedirect] = useState(false)

    let handleAccountDelete = () =>{
        axios.delete(`${REACT_APP_SERVER_URL}/api/${props.user.id}`)
        .then(() => {
            props.handleLogout()
        })
        .catch(error => console.log(error));     
    }

    const userData = props.user ? 
    (<div>
        <h1>{props.user.name}</h1>
        <h3>{props.user.about}</h3>
        <p>{props.user.birthdate}</p>
        <p>{props.user.location}</p>
        <p><strong>Email:</strong> {props.user.email}</p> 
        <p><strong>ID:</strong> {props.user.id}</p> 
        <Link to='/profile/edit/'>Edit Profile</Link>
        <Link onClick={handleAccountDelete}>Delete User</Link>
    
    </div>
    
    ) : <h4>Loading...</h4>

    const errorDiv = () => {
        return (
            <div className="text-center pt-4">
                <h3>Please <Link to="/login">login</Link> to view this page</h3>
            </div>
        );
    };
    // if (redirect) return <Redirect to="/signup" />

    return (
        <div>
            { props.user ? userData : errorDiv() }
        </div>
    );

}

export default Profile;