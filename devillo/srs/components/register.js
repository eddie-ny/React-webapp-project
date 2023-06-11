import React from 'react'
import '../css/login.css'
import { Link } from 'react-router-dom'

function register() {
  return (
    <>
       <div className='dash'> 
          <h1 className='welcome'>Welcome</h1>
          <div className='select'>
            <h4 className='h4'><Link className='login_links' to='/dashboard'>Dashboard</Link></h4>
            <h4 className='h4'><Link className='login_links' to='/login'>Log In</Link></h4>
          </div>
          
        </div>
        <div className='bigger'>
          <div className="container">
              <h2 className='signUp_text'>Sign Up</h2>
              <form>
                  <input className='input_type' type="text" placeholder="Username" required/>
                  <input className='input_type' type="password" placeholder="Password" required/>
                  <input className='input_type' type="password" placeholder="Confirm Password" required/>
                  <input className='submit_btn' type="submit" value="Register"/>
              </form>
              <p className='ask'>Already have an account? <Link to="/login">login here</Link></p>
          </div>
        </div>
    </>
  )
}

export default register