import React from 'react'
import './LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='container'>
        <div className='hearder'>
            <div className='text'>Signup</div>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
            <div className='input'>
             <input type="text" />
            </div>
            <div className='input'>
             <input type="email" />
            </div>
            <div className='input'>
             <input type="paassword" />
            </div>
            <div className="forgot-password">Forgot Password? <span>click here!</span></div>
            <div className='submit-container'>
                <div className='submit'>Sign Up</div>
                <div className='submit'>Log In</div>
            </div>
        </div>
    </div>
  )
}

export default LoginSignup
