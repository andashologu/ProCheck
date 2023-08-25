import React from 'react'
import './style.css'

const signup = () => {
  return (
    <div class="wrapper">
        <section class="form signup">
            <header>SIGNUP</header>
            <form action="#">
                <div class="error-text">This is an error message!</div>
                <div class="name-details">
                    <div class="field input">
                        <label>First Name</label>
                        <input type="text" placeholder="First Name"/>
                    </div>
                    <div class="field input">
                        <label>Last Name</label>
                        <input type="text" placeholder="Last Name"/>
                    </div>
                </div>
                <div class="field input">
                    <label>Email Adress</label>
                    <input type="text" placeholder="Email Adress"/>
                </div>
                <div class="field input">
                    <label>Username</label>
                    <input type="text" placeholder="User Name"/>
                </div>
                <div class="field input">
                    <label>Password</label>
                    <input type="text" placeholder="Enter new password"/>
                    <i class="fas fa-eye"></i>
                </div>
                <div class="field button">
                    <input type="submit" value="Register"/>
                </div>
            </form>
            <div class="link">Already signed up? <a href="login.html">Login now</a></div>
        </section>
    </div>
  )
}
export default signup