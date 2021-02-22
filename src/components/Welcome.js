import React from 'react';

const Welcome = () => {
    return (
        
        <div class="welcomeBox">
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" rel="stylesheet"></link>
           <h1 class="welcomeTo">Welcome to Beach Bums</h1>
            <p class="welcomePara">Kick back, grab a margarita, turn on some Jimmy Buffet, and follow some people out to the beach.</p>
            <form>
                <div class="loginButton">
                    <button class="login">Login</button>
                </div>
                <p class="account?">Don't have an account?</p>
                <div class="signupButton">
                    
                    <button class="signup">SignUp</button>
                </div>
            </form>
        </div>
    );
}

export default Welcome;