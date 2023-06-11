import React from "react";
import { Link } from "react-router-dom";
import "./dashboard.css";
import Logo from "./wora.png"; 

function Profile() {
  return (
    
    <div className="dashboard-container">
      <div className="sidebar">
      <div className="sidebar-header">
          <img src={Logo} alt="Logo" className="sidebar-logo" />
          <h1 className="sidebar-heading">Profile</h1>
        </div>
        
        <ul className="sidebar-menu">
          <li className="sidebar-menu-item">
            <Link to="/dashboard" className="sidebar-menu-link">
              Home
            </Link>
          </li>
          <li className="sidebar-menu-item">
            <Link to="/dashboard/profile" className="sidebar-menu-link">
              Profile
            </Link>
          </li>
          <li className="sidebar-menu-item">
            <Link to="/dashboard/courses" className="sidebar-menu-link">
              Courses
            </Link>
          </li>
          <li className="sidebar-menu-item">
            <Link to="/dashboard/grades" className="sidebar-menu-link">
              Grades
            </Link>
          </li>
          <li className="sidebar-menu-item">
            <Link to="/dashboard/schedule" className="sidebar-menu-link">
              Schedule
            </Link>
          </li>
          <li className="sidebar-menu-item">
            <Link to="/" className="sidebar-menu-link">
              sign out
            </Link>
          </li>
        </ul>
      </div>
      
    </div>
  );
}

export default Profile;