import React, { useState } from 'react'
import axios from 'axios'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

const Home = (props) => {
    console.log(props)
    let [content, setContent] = useState('')
    let [author, setAuthor] = useState(props.user.id)
    // let [photo, setPhoto] = useState(props.user.photo)

    const handleContent = (e) => {
        setContent(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        let newPost = { content, author }
 
        axios.post(`${REACT_APP_SERVER_URL}/post/new`, newPost)
        .then(response => {
            console.log(response)
        })
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
                                <input type="submit" className="submitStatus" onClick={handleSubmit}></input>
                            </div>
                        </form>
                    </div>
            
            
                <div className="followColumn">
                    <ul>
                        <h3>Follow Suggestions</h3>
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
                        <ul className="feedList">
                            
                                <li className="feedPosts">
                                    <h3>posts will go here</h3>
                                </li>
                                <li className="feedPosts">
                                    <h3>posts will go here</h3>
                                </li>
                                <li className="feedPosts">
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