export default function Validation(values) {
    
    const errors = {};
  
    const emailValue = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordValue = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (values.firstname.trim() === '') {
      errors.firstname = 'Firstname is required!';
    }
  
    if (values.lastname.trim() === '') {
      errors.lastname = 'Lastname is required!';
    }
  
    if (values.email.trim() === '') {
      errors.email = 'Email is required!';
    } else if (!emailValue.test(values.email)) {
      errors.email = 'Provide a valid email address!';
    }
  
    if (values.password.trim() === '') {
      errors.password = 'Password is required!';
    } else if (!passwordValue.test(values.password)) {
      errors.password = 'Password should contain at least one uppercase letter, one lowercase letter, one digit, and be at least 8 characters long!';
    }
  
    if (values.password2.trim() === '') {
      errors.password2 = 'Re-enter to verify your password!';
    } else if (values.password2 !== values.password) {
      errors.password2 = 'Passwords do not match!';
    }
  
    return errors;
  }