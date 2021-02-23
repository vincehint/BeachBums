import React from 'react';

const Home = () => {
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