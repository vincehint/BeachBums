import React from 'react';
import {Link } from 'react-router-dom'

const Welcome = () => {
    // let handleLogin = ()=>{

    //     return <Redirect to='/login'/>
    // }
    return (
        
        <div className="welcomeBox">
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" rel="stylesheet"></link>
           <h1 className="welcomeTo">Welcome to Beach Bums</h1>
            <p className="welcomePara">Kick back, grab a margarita, turn on some Jimmy Buffet, and follow some people out to the beach.</p>
            <form>
                <div className="loginButton">
                    <Link className="login" to='/login'>Log In</Link>
                    {/* <button className="login">Login</button> */}
                </div>
                <p className="account?">Don't have an account?</p>
                <div className="signupButton">
                    
                    <Link className="signup" to="/signup">SignUp</Link>
                </div>
            </form>
        </div>
    );
}

export default Welcome;