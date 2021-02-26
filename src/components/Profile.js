import { Link, Redirect } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Profile = (props) => {
    console.log(props);
    const [redirect,setRedirect] = useState(false)

    let handleAccountDelete = () =>{
        axios.delete(`${REACT_APP_SERVER_URL}/api/${props.user.id}`)
        .then(() => {
            props.handleLogout()
        })
        .catch(error => console.log(error));     
    }

    if (!props.user) return <Redirect to="/login" />

    const userData = props.user ? 
    (<div>
        <h1>{props.user.username}</h1>
        <h3>{props.user.about}</h3>
        <p>{props.user.birthdate}</p>
        <p>{props.user.location}</p>
        <p><img src='{props.user.photo}'></img></p>
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

    let profileData = props.user.posts

    let profileFeed = profileData.map((post, i) => {
        return (<p key={i}>
            <ul className="profileFeed">
                <li className='postContainerProfile'>
                    <div className="postAuthor">
                        {props.user.username} 
                        {post.createdAt} 
                    </div>
                    <div className="postContent">
                        {post.content}
                    </div>
                </li>
            </ul>
            </p>)
    })

    return (
        <div className="profilePage">
            <div className="profileContainer" >
                <div className="myProfile">
                    <div className="profilePicture">
                        <img src={props.user.photo} alt="Users Profile Photo"/>
                    </div>
                    <h1 id="helloUser">Hello, {props.user.username}</h1>
                    <div className="profileInfo">
                        <p>Birthday: {props.user.birthdate}</p>
                        <p>Located In: {props.user.location}</p>
                        <p>About Me: {props.user.about}</p>
                    </div>
                    {/* { props.user ? userData : errorDiv() } */}
                    <div className="crudButtonsProfile">
                </div>
                    <div className="editProfile">   
                        <Link className="editButtonUser" to='/profile/edit'>Edit Profile</Link>
                    </div> 
                    <div className="deleteProfile">
                        <button className="deleteButtonUser" onClick={handleAccountDelete}>Delete User</button>
                    </div>
                </div>
            </div>  
            <div className="myPostContainer">
                <ul className="feedListProfile">
                    <div className="postContainer">
                        <li className="myPosts">
                            <div className="post">
                                <div className="postsHeader">
                                    <h2>Your Posts</h2>
                                </div>
                                <div className="postListContainer">
                                    <div>
                                        {profileFeed}
                                    </div>  
                                </div>
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