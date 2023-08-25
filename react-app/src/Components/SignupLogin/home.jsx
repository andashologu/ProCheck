import React from 'react'
import './home.css'
import img from './backgroundlogo.png'

const home = () => {
  return (
    <body>
    <section>

    <div className='imgBox'>
        <img src={img} alt='#n'/>
    </div>

    <div class="wrapper">
    <div class="form signup">
        <header>LOGIN</header>
        <form action="#">
            <div class="error-text">This is an error message!</div>
            <div class="field input">
                <label>Email Adress</label>
                <input type="text" placeholder="Enter your email" />
            </div>
            <div class="field input">
                <label>Password</label>
                <input type="text" placeholder="Enter your password"/>
                <i class="fas fa-eye"></i>
            </div>
            <div class="field button">
                <input type="submit" value="Login"/>
            </div>
        </form>
        <div class="link">Not yet signed up? <a href="index.html">Signup now</a></div>

    </div>
    </div>

    </section>
    </body>
  )
}
export default home