import React from 'react';
import {useState} from 'react'

function Input(){

    const [ ] = useState( '' )

    return(
        <div id="form">
            <div id="input">
                <input id="firstName" placeholder="First Name"></input>
                <input id="lastName" placeholder="Last Name"></input>
                <input id="impression" placeholder="Best Impression"></input>
                <button onClick={ ()=> console.log("HI")}>Join Us!</button>
            </div>
            <div id="output">
                <p></p>
            </div>
        </div>
    )
}

export default Input