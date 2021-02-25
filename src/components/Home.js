import React, { useEffect, useState } from 'react';
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
    let [allUsers, setAllUsers] = useState(props.allUsers)
    let [allPost, setAllPost] = useState([])

    // let others_Users = props.allUsers.filter(user => (props.user.id !== user._id) )
    // setOthersUsers(others_Users)

    // props.allUsers.forEach(user =>{
    //     if (props.user.id !== user._id){
    //         setOthersUsers([...othersUsers,user])
    //     }
    // })
    
    

    useEffect(()=>{
        axios.get(`${REACT_APP_SERVER_URL}/post/hello`)
        .then(response => {
            setAllPost(response.data)
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

    // let othersUsers = props.allUsers.data.filter(function (otherUser){
    //     console.log(otherUser._id)
    //     return (otherUser._id !== props.user.id)
    // })
    // console.log(props.user.id)

    console.log('Current User', props.user);
    console.log(props.allUsers.data)

 


    // async function getOthersUsers(){
    //     await props.user
    //     console.log(props.user)
    //     console.log(props.allUsers.data)
    // }

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
                        
                        {/* {booleanOtherUsers.map((user,index)=> {
                            return (
                                <li key={index}>
                                    {user.username}
                                </li>
                            )
                        })} */}
                        {/* {allUsers.map(user => {
                            // if (user._id !== props.user.id){
                            //     console.log(user._id)
                                return <li>{user.username}</li>
                            // }
                        })} */}
                        {/* {console.log(props.use.length)} */}
                        


                        {/* <li>I Follow This Person</li> */}
                       
                   
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


