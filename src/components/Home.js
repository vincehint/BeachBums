import React from 'react'
import axios from 'axios'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL
import { useState } from 'react'

const Home = () => {
    let [post, setPost] = useState('')
    let [user, setUser] = useState('')
    let [timestamps, setTimestamps] = useState('')

    const handleContent = (e) => {
        setPost(e.target.value)
    }

    const handleUser = () => {
        setUser(currentUser)
    }

    const handleTimestamps = () => {
        setTimestamps(timestamps)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post(`${REACT_APP_SERVER_URL}/post`, newPost)
        .then(response)
    }

    return (
<<<<<<< HEAD
        <div>
            <form>
                <h1>What's on your mind?</h1>
                <input type='text'></input>
                <input type='submit'></input>
            </form>
            <p>Post 1</p>
            <p>Post 2</p>
            <p>Post 3</p>
        </div>
=======
        <div className="home-wrapper">
            


            
                        <form className="postForm">
                            <div>
                                <label htmlFor="postStatus" className="statusLabel">How You Doin' Dude?</label>
                            </div>
                            <div>
                                <input className="statusBox" type="text"></input>
                            </div>
                            <div>
                                <input type="submit"></input>
                            </div>
                        </form>
                   
                            <ul>
                                <li>I Follow This Person</li>
                                <li>I Follow This Person</li>
                                <li>I Follow This Person</li>
                                <li>I Follow This Person</li>
                            </ul>
                        
                            <ul>
                                <li>
                                    <h3>posts will go here</h3>
                                </li>
                            </ul>
                        
        </div>   
>>>>>>> 482c91bc63c94e44b3ea3e03d23c1699ea877aa3
    );
}

export default Home;