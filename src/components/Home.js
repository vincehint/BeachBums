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
    );
}

export default Home;