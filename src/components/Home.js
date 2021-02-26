import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { v4 as uniqueID } from "uuid";
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

const Home = (props) => {
    console.log(props)
    let [content, setContent] = useState('')
    let [photo, setPhoto] = useState('')
    let [author, setAuthor] = useState(props.user.id)
    let [comment, setComment] = useState('')
    // let [like, setLike] = useState('')
    let [following, setFollowing] = useState(props.user.following)
    let [userPosts, setUserPosts] = useState([props.user.posts])
    let [allUsers, setAllUsers] = useState(props.allUsers)
    let [allPosts, setAllPosts] = useState([])

    useEffect(()=>{
        axios.get(`${REACT_APP_SERVER_URL}/post/hello`)
        .then(response => {
            setAllPosts(response.data)
        })
        .catch(error => console.log(error)); 
      },[])

    const booleanOtherUsers = (user) => {
        console.log(user._id)
        console.log(props.user.id)
        return user._id !== props.user.id
    }
    const users_other = allUsers.filter(booleanOtherUsers)
    console.log(users_other)


    const handleContent = (e) => {
        setContent(e.target.value)
    }
    const handleAddPost = (e) => {
        e.preventDefault()
        let newPost = { content, author, photo }

        axios.post(`${REACT_APP_SERVER_URL}/post/new/${author}`, newPost)
            .then(() => {
                axios.get(`${REACT_APP_SERVER_URL}/post/author/${author}`)
                    .then(posts => {
                        setUserPosts([...userPosts, posts])
                    })
                    .catch(error => console.log(error));
            })
            .catch(error => console.log(error));
    }

    const handleAddComment = (e) => {
        e.preventDefault()
        let newComment = { author, content }

        axios.post(`${REACT_APP_SERVER_URL}/post/:id`, newComment)
            .then(newComment => {
                setComment(newComment)
            })
            .catch(error => console.log(error))

    }

    let postData = allPosts.map((post, i) => {
        return (
            <div className="homeFeedContainer">
                <div className="postContainer">
                    <p className= "post" key={i}>{post.username} {post.content}</p>
                </div>    
                    <form>
                        <div>
                            <input className="commentBox" type="text" placeholder="leave a comment"></input>
                        </div>
                        <div>
                            <input className="submitComment" type="submit" onClick={handleAddComment}></input>
                        </div>
                    </form>
                
            </div>
                
        )
    })


    return (

        <div className="home-wrapper">
            <div className='homeRow'>
                <div className="homeColumn">
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
                    <div className="feedRow">
                <div className="homeColumn">
                    <div className="feedColumn">
                        <ul className="feedList">

                            <li className="feedPosts">
                                <div className="homeFeedPost">
                                    <p>{postData}</p>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
                </div>
                <div className="followColumn">
                    <h3>Follow Suggestions</h3>
                    <ul>
                        
                        {users_other.map((user,index)=> {
                            return (
                                <li key={index}>
                                    {user.username}
                                    <button value={user._id}>Follow</button>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Home;


