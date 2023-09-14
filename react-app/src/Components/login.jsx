import React from 'react'
import './style.css'

import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'




const Login = () => {

    const [post, setPost] = useState({
        username: '',
        password: ''
    })

    const handleInput = (event) => {
        const newObj = {...post, [event.target.name]: event.target.value}

    }

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/posts', {post})
        .then(response => console.log(response))
        .catch(err => console.log(err))  
    }

  return (
    <body>
     <div class="container">
            <div class="login">
                <div class="header">
                    <header>Login!</header>
                </div>
                <form id="form" action="/" onSubmit={handleSubmit}>
                    <div class="field input">
                        <label>Username:</label>
                        <input type="text" id="username" placeholder="Username" name='username' onChange={handleInput}/>
                        <div class="error"></div>
                    </div>
                    <div class="field input">
                        <label>Password:</label> 
                        <input type="password" id="password"  placeholder="Password" name='password' onChange={handleInput}/>
                        <div class="error"></div>
                    </div>
                    <button type="submit">SUBMIT</button>
                </form>
                <div class="link">Not yet signed up? <Link to="/signup">Signup now!</Link></div>   
            </div>
        </div>
    </body>   
  )
}
export default Login