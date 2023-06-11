import React from 'react';
import './App.css';
import Header from './Components/header';
import RegistrationForm from './Components/registrationForm';
import Login from './Components/login';
import LoginHeader from './Components/loginheader';
import Navigation from './Components/navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Components/dashboard';
import Courses from './Components/courses';
import Grades from './Components/grades';
import Profile from './Components/profile';
import Schedule from './Components/schedule';

function App() {
  return (
    <Router>
      <div className="App">
       
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path='/dashboard/courses' element={<Courses/>}/> 
          <Route path="/registration" element={<RegistrationForm />} />
          <Route path='/dashboard' element={<Dashboard/>}/> 
          <Route path='/dashboard/grades' element={<Grades/>}/>
          <Route path='/dashboard/schedule' element={<Schedule/>}/>
          <Route path='/dashboard/profile' element={<Profile/>}/>
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
