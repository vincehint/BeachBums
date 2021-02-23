import React from 'react';

const Home = () => {
    return (
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
    );
}

export default Home;