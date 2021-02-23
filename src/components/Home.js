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
        <div className="home-wrapper">
            <div className='homeRow'>
                    <div className="postColumn">
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
                    </div>
            
            
                <div className="followColumn">
                    <ul>
                                <li>I Follow This Person</li>
                                <li>I Follow This Person</li>
                                <li>I Follow This Person</li>
                                <li>I Follow This Person</li>
                            </ul>
                </div>
            </div>
            <div className="feedRow">
                <div className="homeColumn">
                    <div className="feedColumn">
                        <ul>
                                <li>
                                    <h3>posts will go here</h3>
                                </li>
                            </ul>
                    </div>
                </div>
            </div>            
        </div>   
    );
}

export default Home;