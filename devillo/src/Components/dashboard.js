import React from "react";
import { Link } from "react-router-dom";
import "./dashboard.css";
import Logo from "./wora.png"; 

function DashboardPage() {
  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="sidebar-header">
          <img src={Logo} alt="Logo" className="sidebar-logo" />
          <h1 className="sidebar-heading">SES Dashboard</h1>
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
      <div className="main-content">
        <h1 className="main-heading">School of Engineering Sciences</h1>
        <p className="main-text">
        “Engineering is the art of solving problems,
Of creating new things,
Of making the world a better place.

Engineers are the makers of history,
The builders of the future,
The ones who change the world.

So if you're looking for a challenge,
If you want to make a difference,
If you want to be a part of something bigger than yourself,

Then engineering is the field for you.
”
        </p>
      </div>
      
    </div>
  );
}

export default DashboardPage;