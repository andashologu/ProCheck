import React from 'react'
import './home.css'
import img from './backgroundlogo.png'

import { Link } from 'react-router-dom'



const home = () => {
  return (
    <body>
    <section>

    <div className='imgBox'>
        <img src={img} alt='#'/>
    </div>

   
            <div class="login">
                <div class="header">
                    <header>Login!</header>
                </div>
                <form id="form" action="/">
                    <div class="field input">
                        <label>Username:</label>
                        <input type="text" id="username" placeholder="Username"/>
                        <div class="error"></div>
                    </div>
                    <div class="field input">
                        <label>Password:</label> 
                        <input type="password" id="password"  placeholder="Password"/>
                        <div class="error"></div>
                    </div>
                   
                    <button type="submit">SUBMIT</button>
                </form>
                <div class="link">Not yet signed up? <Link to="/signup">Signup now!</Link></div>   
            </div>
     

    </section>
    </body>
  )
}
export default home

