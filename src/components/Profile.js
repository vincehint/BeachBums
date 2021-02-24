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
        <h1>{props.user.username}</h1>
        <h3>{props.user.about}</h3>
        <p>{props.user.birthdate}</p>
        <p>{props.user.location}</p>
        <image>{props.user.photo}</image>
        <p><strong>Email:</strong> {props.user.email}</p> 
        <p><strong>ID:</strong> {props.user.id}</p> 
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
        <div className="profilePage">
            <div className="profileContainer" >
                
                <img src={props.user.photo} alt="Users Profile Photo"/>
                <h1 id="helloUser">Hello, {props.user.username}</h1>
                <p>Birthday: {props.user.birthdate}</p>
                <p>Located In: {props.user.location}</p>
                <p>About Me: {props.user.about}</p>
                {/* { props.user ? userData : errorDiv() } */}
                <div className="crudButtonsProfile">
                    <Link className="editButtonUser" to='/profile/edit'>Edit Profile</Link>
                    <Link className="deleteButtonUser" onClick={handleAccountDelete}>Delete User</Link>
                </div>
            </div>  
            <div className="myPostContainer">
                <ul className="feedListProfile">
                    <div className="postContainer">
                        <li className="myPosts">
                            <div className="post">
                                <h2>Author Name </h2>
                                <p>{props.user.posts}Some Content Here</p>
                            </div>
                            <div className="commentContainer">
                                <label htmlFor="comment">Comment</label>
                                <input className="comment" type="text"></input>
                                <input className="submitButtonComment" type="submit"></input>
                            </div>
                        </li>
                    </div>
                </ul>
            </div> 
        </div>
    );

}

export default Profile;