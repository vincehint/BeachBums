import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { v4 as uniqueID } from "uuid";
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL
const Home = (props) => {
    let [content, setContent] = useState('')
    let [photo, setPhoto] = useState('')
    let [author, setAuthor] = useState(props.user.id)
    // let [comment, setComment] = useState('')
    // let [like, setLike] = useState('')
    let [following, setFollowing] = useState(props.user.following)
    let [userPosts, setUserPosts] = useState([props.user.posts])
    
    
    // useEffect(()=>{
    // axios.get(`${REACT_APP_SERVER_URL}/post/new/${author}`)
    // .then(response => {
    //     setUserPosts(response)
    // })
    // .catch(error => console.log(error)); 
    // },[])
    
    const handleContent = (e) => {
        setContent(e.target.value)
    }
    const handleAddPost = (e) => {
        e.preventDefault()
        let newPost = {content, author, photo}
 
        axios.post(`${REACT_APP_SERVER_URL}/post/new/${author}`, newPost)
        .then(post => {
            // axios.get(`${REACT_APP_SERVER_URL}/post/post`)
            // .then(posts =>{
                setUserPosts([...userPosts,post])
            // })
            // .catch(error => console.log(error)); 
        })
        .catch(error => console.log(error)); 
    }
    return (
        
        <div className="home-wrapper">
            <div className='homeRow'>
                    <div className="postColumn">
                        <form className="postForm">
                            <div>
                                <label htmlFor="postStatus" className="statusLabel">How You Doin' Dude?</label>
                            </div>
                            <div>
                                <input className="statusBox" type="text" onChange={handleContent}></input>
                            </div>
                            <div>
                                <input type="submit" className="submitStatus" onClick={handleAddPost}></input>
                            </div>
                        </form>
                    </div>
                <div className="followColumn">
                    <h3>Follow Suggestions</h3>
                    <ul>
                        <li>I Follow This Person</li>
                        <li>I Follow This Person</li>
                        {/* {allUsers.forEach(user =>{
                            return (
                                <li key={uniqueID()}>{user.username} <button value='Follow'></button></li>
                           )
                        })} */}
                            
                       
                   
                    </ul>
                </div>
            </div>
            <div className="feedRow">
                <div className="homeColumn">
                    <div className="feedColumn">
                        <ul className="feedList">
                            
                                <li className="feedPosts">
                                    <div className="homeFeedPost">
                                        <h3>posts will go here</h3>
                                    </div>
                                    <div className="commentContainer">
                                        <label htmlFor="comment">Comment</label>
                                        <input className="comment" type="text"></input>
                                        <input className="submitButtonComment" type="submit"></input>
                                    </div>
                                </li>
                                
                            </ul>
                    </div>
                </div>
            </div>            
        </div>  
    )
}
export default Home;
















