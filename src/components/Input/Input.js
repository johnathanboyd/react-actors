import React from 'react';

function Input(){
    return(
        <div id="form">
            <div id="input">
                <input id="firstName" placeholder="First Name"></input>
                <input id="lastName" placeholder="Last Name"></input>
                <input id="impression" placeholder="Best Impression"></input>
                <button onClick={ ()=> console.log("HI")}>Join Us!</button>
            </div>
        </div>
    )
}

export default Input