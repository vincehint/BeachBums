import React from 'react'
import axios from 'axios'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL
import { useState } from 'react'



    return (
        <div>
            <form>
                <h1>What's on your mind?</h1>
                <input type='text' onChange={handleContent}></input>
                <input type='submit' onClick={handleSubmit}></input>
            </form>
            <p>Post 1</p>
            <p>Post 2</p>
            <p>Post 3</p>
        </div>
    );
}

export default Home;