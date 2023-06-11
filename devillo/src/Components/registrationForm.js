import React, { useState } from 'react';
import './style.css';
import Header from './header';
import { useNavigate } from 'react-router-dom';


function RegistrationForm() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('student');
  const notEmpty = (value) => {
    return value.trim() !== '';
  };
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === 'firstName') {
      setFirstName(value);
    } else if (id === 'lastName') {
      setLastName(value);
    } else if (id === 'email') {
      setEmail(value);
    } else if (id === 'password') {
      setPassword(value);
    } else if (id === 'confirmPassword') {
      setConfirmPassword(value);
    } else if (id === 'role') {
      setRole(value);
    }
  };


  const handleSubmit = () => {
    console.log(firstName, lastName, email, password, confirmPassword, role);
    navigate('/dashboard');
  };


  return (
    <span>
    <Header/>
      <div className="form">
        <div className="form-body">
        <img src="/wora.png" alt="" class="form__logo"/>
          <div className="username">
         
            <input
              className="form__input"
              type="text"
              value={firstName}
              onChange={(e) => handleInputChange(e)}
              id="firstName"
              placeholder="First Name"
            />
          </div>
          <div className="lastname">
           
            <input
              type="text"
              name=""
              id="lastName"
              value={lastName}
              className="form__input"
              onChange={(e) => handleInputChange(e)}
              placeholder="Last Name"
            />
          </div>
          <div className="email">
            
            <input
              type="email"
              id="email"
              className="form__input"
              value={email}
              onChange={(e) => handleInputChange(e)}
              placeholder="Email"
            />
          </div>
          
          <div className="role">
           
            <select
              id="role"
              className="form__input"
              value={role}
              onChange={(e) => handleInputChange(e)}
            >
              <option value="student">Student</option>
              <option value="staff">Staff</option>
            </select>
          </div>
        </div>
        <div className="footer">
          
          <button onClick={handleSubmit} disabled={!notEmpty(firstName) || !notEmpty(lastName) || !notEmpty(email) }>Register</button>
        </div>
      </div>
      </span>
   
  );
}

export default RegistrationForm;
