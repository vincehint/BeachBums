import React from 'react';

const Home = () => {
    return (
        <div>
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
            <div className="feed">
                <div className="posts">
                    <ul>
                        <li>
                            <h3>posts will go here</h3>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Home;