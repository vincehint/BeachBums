import React, { useState } from 'react'
import axios from 'axios'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

const Home = (props) => {
    let [content, setContent] = useState('')
    let [comment, setComment] = useState('')
    let [photo, setPhoto] = useState('')
    let [like, setLike] = useState('')
    let [author, setAuthor] = useState(props.user.id)

    const handleContent = (e) => {
        setContent(e.target.value)
    }

    const handlePost = (e) => {
        e.preventDefault()
        let newPost = {content, author, photo}

        axios.post(`${REACT_APP_SERVER_URL}/post/new`, newPost)
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
                                <input className="statusBox" type="text" name="content"></input>
                            </div>
                            <div>
                                <input type="submit" onClik="handlePost"></input>
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