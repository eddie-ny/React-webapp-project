import React from 'react'
import { Link } from 'react-router-dom'
import '../css/dashboard.css'



function dashboard() {
  return (
    <>
        <div className="task-manager">
            <div className="left-bar">
            <div className="left-content">
                <ul className="action-list">
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-inbox">
                    <rect x="2" y="2" width="10" height="10" rx="2" ry="2"></rect>
                    <path d="M9.828 9H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V11a1 1 0 0 0-.293-.707L17 7.414A2 2 0 0 0 15.586 7H9.828a1 1 0 0 0-.707.293L7 8.414A2 2 0 0 0 6 11v8"></path>
                    </svg>
                    Inbox
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-check-square">
                    <polyline points="9 11 12 14 22 4"></polyline>
                    <path d="M22 4v16H6a2 2 0 0 1-2-2V4h16z"></path>
                    </svg>
                    Completed
                </li>
                </ul>
                <h2>Categories</h2>
                <ul className="category-list">
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-tag">
                    <path d="M8 7l8-8 9 9-8 8-9-9z"></path>
                    <line x1="20.5" y1="10.5" x2="9" y2="22"></line>
                    <line x1="7" y1="2" x2="2" y2="7"></line>
                    </svg>
                    Personal Info
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-tag">
                    <path d="M8 7l8-8 9 9-8 8-9-9z"></path>
                    <line x1="20.5" y1="10.5" x2="9" y2="22"></line>
                    <line x1="7" y1="2" x2="2" y2="7"></line>
                    </svg>
                    Work
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-tag">
                    <path d="M8 7l8-8 9 9-8 8-9-9z"></path>
                    <line x1="20.5" y1="10.5" x2="9" y2="22"></line>
                    <line x1="7" y1="2" x2="2" y2="7"></line>
                    </svg>
                    Courses
                </li>
                </ul>
            </div>
            </div>
            <div className="page-content">
            <div className="header">
                Tasks
            </div>
            <div className="content-categories">
                <div className="label-wrapper">
                <input type="radio" name="category" id="all" checked/>
                <label className="category" for="all">All</label>
                </div>
                <div className="label-wrapper">
                <input type="radio" name="category" id="personal"/>
                <label className="category" for="personal">Personal</label>
                </div>
                <div className="label-wrapper">
                <input type="radio" name="category" id="grade"/>
                <label className="category" for="grade">Grades</label>
                </div>
                <div className="label-wrapper">
                <input type="radio" name="category" id="assignments"/>
                <label className="category" for="assignments">Assignments</label>
                </div>
                <div className="label-wrapper">
                <input type="radio" name="category" id="info"/>
                <label className="category" for="info">Financial Info</label>
                </div>
            </div>
            <div className="tasks-wrapper">
                <div className="task">
                <div className="task-item">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-file-text">
                    <path d="M17 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"></path>
                    <polyline points="17 3 17 8 7 8 7 3"></polyline>
                    <line x1="7" y1="12" x2="17" y2="12"></line>
                    <line x1="9" y1="16" x2="9" y2="20"></line>
                    <line x1="13" y1="16" x2="13" y2="20"></line>
                    </svg>
                </div>
                <div className="task-item label-text">
                    <h3>Announcements</h3>
                </div>
                <div className="tag approved">View</div>
                </div>
                <div className="task">
                <div className="task-item">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-code">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                </div>
                <div className="task-item label-text">
                    <h3>Tests and quizzes</h3>
                </div>
                <div className="tag progress">In Progress</div>
                </div>
                <div className="task">
                <div className="task-item">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-edit-3">
                    <path d="M12 20h9"></path>
                    <path d="M16 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-9"></path>
                    <line x1="8" y1="2" x2="21" y2="15"></line>
                    </svg>
                </div>
                <div className="task-item label-text">
                    <h3>Event Calender</h3>
                </div>
                <div className="tag review">Open</div>
                </div>
                <div className="task">
                <div className="task-item">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-clock">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                </div>
                <div className="task-item label-text">
                    <h3>Course Materials</h3>
                </div>
                <div className="tag waiting">Download</div>
                </div>
            </div>
            </div>
            <div className="right-bar">
            <h2>Task Details</h2>
            <div className="task-details">
                <h3>Assignment</h3>
                <p>Introduction to Software Engineering</p>
            </div>
            <div className="task-details">
                <h3>Category</h3>
                <p>Work</p>
            </div>
            <div className="task-details">
                <h3>Status</h3>
                <p>In Progress</p>
            </div>
            <div className="task-details">
                <h3>Due Date</h3>
                <p>June 15, 2023</p>
            </div>
            <div className="task-buttons">
                <Link to="/login"><button>Logout</button></Link>
                <Link to="/login"><button>Login</button></Link>
            </div>
            </div>
        </div>
    
    </>
  )
}

export default dashboard