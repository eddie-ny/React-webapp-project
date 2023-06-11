import React, { useState } from 'react';
import './style.css';
import LoginHeader from './loginheader'
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [ID, setID] = useState('');
  const [PIN, setPIN] = useState('');
  const [role, setRole] = useState('student');

  const notEmpty = (value) => {
    return value.trim() !== '';
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === 'ID') {
      setID(value);
    } else if (id === 'PIN') {
      setPIN(value);
    } else if (id === 'role') {
      setRole(value);
    }
  };

  const handleSubmit = () => {
    console.log(PIN, ID, role);
    navigate('/dashboard');
  };

  return (
    <span>
      <LoginHeader/>
      <div className="form">
        <div className="form-body">
        <img src="/wora.png" alt="" class="form__logo"/>
          <div className="ID">
           
            <input
              className="form__input"
              type="text"
              value={ID}
              onChange={(e) => handleInputChange(e)}
              id="ID"
              placeholder="ID"
            />
          </div>

          <div className="PIN">
           
            <input
              type="password"
              id="PIN"
              className="form__input"
              value={PIN}
              onChange={(e) => handleInputChange(e)}
              placeholder="PIN"
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
          <button onClick={handleSubmit} disabled={!notEmpty(ID) || !notEmpty(PIN)}>
            Login
          </button>
        </div>
      </div>
    </span>
  );
}

export default Login;
