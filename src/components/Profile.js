import { Link, Redirect } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Profile = (props) => {
    console.log(props);
    const [redirect,setRedirect] = useState(false)
    const [values, setValues] = useState({
        id: props.user.id,
        // username: props.user.username,
        // email: props.user.email,
        password: '',
        // birthdate: props.user.birthdate,
        // about: props.user.about,
        // location: props.user.location,
        // photo: props.user.photo
  })

    let handleAccountDelete = () =>{
        axios.delete(`${REACT_APP_SERVER_URL}/api/${props.user.id}`)
        .then(() => {
            props.handleLogout()
        })
        .catch(error => console.log(error));     
    }

    const handleChange = name => event => {
        const value = event.target.value
        setValues({...values, [name]: value })
    }

    const changePassWord = (e) => {
        e.preventDefault();
        const passwordUpdated = values

        axios.post(`${REACT_APP_SERVER_URL}/api/password/edit/`, passwordUpdated)
        .then(response => {
            console.log(response);
                setRedirect(true);
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

    let handleDeletePost = (e) => {
        e.preventDefault()

        axios.delete(`${REACT_APP_SERVER_URL}/post/${props.user.post}`)
        .then(() => {
            setRedirect(true)
        })
        .catch(error => console.log(error))
    }

    if (redirect) return <Redirect to="/profile" />

    let profileData = props.user.posts

    let profileFeed = profileData.map((post, i) => {
<<<<<<< HEAD
        return (<p key={i}>{props.user.username} {post.createdAt} {post.content}
        <button onClick={handleDeletePost}>Delete Post</button>
        </p>
        )
=======
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
                    <div className="commentContainer">
                        <label htmlFor="comment">Comment</label>
                        <input className="comment" type="text"></input>
                        <input className="submitButtonComment" type="submit"></input>
                    </div>
                </li>
            </ul>
            </p>)
>>>>>>> 153c401cba406edbf1d478b02af902e7668c2697
    })

    return (
        <div className="profilePage">
            <div className="profileContainer" >
                <div className="myProfile">
                    <div className="profilePicture">
                        <img className="profilePhoto" src={props.user.photo} alt="Users Profile Photo"/>
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

                    <div>
                        <input type="text" id="password" name="password" value={values.password} onChange={handleChange('password')} className="formControl" required/>
                    </div>

                    <div>
                        <button className="changePasswordButton" onClick={changePassWord}>Change Password</button>
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
                            
                        </li>
                    </div>
                </ul>
            </div> 
        </div>
    );

}

export default Profile;