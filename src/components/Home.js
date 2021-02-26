import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { v4 as uniqueID } from "uuid";
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

const Home = (props) => {
    console.log(props)
    let [content, setContent] = useState('')
    let [author, setAuthor] = useState(props.user.id)
    let [comment, setComment] = useState('')
    let [allPosts, setAllPosts] = useState([])
    let [photo, setPhoto] = useState('')
    // let [like, setLike] = useState('')
    let [following, setFollowing] = useState(props.user.following)
    let [userPosts, setUserPosts] = useState([props.user.posts])
    let [allUsers, setAllUsers] = useState(props.allUsers)
    let [otherUsers, setOtherUsers] = useState([])
    let [unfollowing,setUnfollowing] = useState('')
    let current_user = props.user

    useEffect(()=>{
        axios.get(`${REACT_APP_SERVER_URL}/post/hello`)
        .then(response => {
            setAllPosts(response.data)
        })
        .catch(error => console.log(error)); 
      },[])

    useEffect(()=>{
        const booleanOtherUsers = (user) => {
            return user._id !== props.user.id
        }
        const users_other = allUsers.filter(booleanOtherUsers)
        setOtherUsers(users_other)

    },[])

    
    const handleFollowing = (e) => {
        e.preventDefault()
        console.log('entrou front-end followin')
        setFollowing([...following,e.target.value])
        console.log(e.target.value)

        axios.post(`${REACT_APP_SERVER_URL}/api/follow/${e.target.value}/user/${current_user.id}`)
            .then(response => {
                console.log(response.data)
            })
            .catch(error => console.log(error))

    }

    const handleUnFollowing = (e) => {
        e.preventDefault()
        console.log('entrou front-end unfollowin')
        console.log(following)
        const booleanUnfollow = (user) => {
            return user !== e.target.value
        }
        const updateUnfollowing = following.filter(booleanUnfollow)
        setFollowing(updateUnfollowing)
        console.log(following)

        console.log(e.target.value)

        axios.post(`${REACT_APP_SERVER_URL}/api/unfollow/${e.target.value}/user/${current_user.id}`)
            .then(response => {
                console.log(response.data)
            })
            .catch(error => console.log(error))

    }


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
                setComment([...comment,newComment])
            })
            .catch(error => console.log(error))

    }


    // console.log(allPosts)
    // const postCommentArray = allPosts.map(post =>{
    //     // console.log(post)
    //     return {
    //         id: post._id, author:post.author, cmt:post.comments
    //     }
    // })
    // console.log(postCommentArray)
   
      

    let postData = allPosts.map((post, i) => {
        return (
            <div className="homeFeedContainer">
                <div className="postContainer">
                    <p className= "post" key={i}> {post.content}</p>
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
                                   
                                        {postData}
                                        
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
                        
                        {otherUsers.map((user,index)=> {
                            return (
                                <div className="followSuggestions">
                                    <li key={index}>
                                    <img className="followerPhoto" src={user.photo}/>                                    
                                        {user.username}
                                        <span>
                                            {following.includes(user._id) ? <button className="followButton" value={user._id} onClick={handleUnFollowing}>UnFollow</button> : <button className="unfollowButton" value={user._id} onClick={handleFollowing}>Follow</button>}
                                        </span>
                                    </li>
                                </div>
                            )
                        })}
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Home;


