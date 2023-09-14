import React from 'react'
import './style.css'

import { Link } from 'react-router-dom'
import { useState } from 'react'
import Validation from './validation.jsx'


const Signup = () => {
    const [values, setValues] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        password2: ''
    }
    )


const [errors, setErrors] = useState({})

function handleInput(event) {
    const newObj = {...values, [event.target.name]: event.target.value}
    setValues(newObj)
}

function handleValidation(event) {
    event.preventDefault();
    const validationErrors = Validation(values);
    setErrors(validationErrors)
}
  return (
    <body>
        <div class="container">
            <div class="login">
                <div class="header">
                    <header>Sign Up!</header>
                </div>
                <form id="form" onSubmit={handleValidation}>
                    <div class="details">
                    <div class="field input">
                        <label>Firstname:</label>
                        <input type="text" id="firstname" placeholder="First Name" name="firstname" className="form-control" onChange={handleInput}/>
                        {errors.firstname && <p>{errors.firstname}</p>}
                    </div>
                    <div class="field input">
                        <label>Lastname:</label>
                        <input type="text" id="lastname" placeholder="Last Name" name="lastname" className="form-control" onChange={handleInput}/>
                        {errors.lastname && <p>{errors.lastname}</p>}
                    </div>
                    </div>
                    <div class="field input">
                        <label>Email Adress:</label>
                        <input type="text" id="email" placeholder="Email Adress" name="email" className="form-control" onChange={handleInput}/>
                        {errors.email && <p>{errors.email}</p>}
                    </div>
                    <div class="field input">
                        <label>Password:</label>
                        <input type="password" id="password"  placeholder="Password" name="password" className="form-control" onChange={handleInput}/>
                        {errors.password && <p>{errors.password}</p>}
                    </div>
                    <div class="field input">
                        <label>Password:</label>
                        <input type="password" id="password2"  placeholder="Re-enter Password" name="password2" className="form-control" onChange={handleInput}/>
                        {errors.password2 && <p>{errors.password2}</p>}
                    </div>
                    <button type="submit">SUBMIT</button>
                </form>
                <div class="link">Already have an account? <Link to="/login">Login now!</Link></div>   
            </div>

        </div>
    </body>
  )
}
export default Signup