import React from 'react'
import '../css/login.css'
import { Link } from 'react-router-dom'

function login() {
  return (
    <>
      <div className='body'>
        <div className='dash'> 
          <h1 className='welcome'>Welcome</h1>
          <div className='select'>
            <h4 className='h4'><Link className='login_links' to='/dashboard'>Dashboard</Link></h4>
            <h4 className='h4'><Link className='login_links' to='/login'>Register</Link></h4>
          </div>
          
        </div>
        
        <div className="main">  	
          <input className='input' type="checkbox" id="chk" aria-hidden="true"/>

            <div className="signup">
              <form>
                <label className='labels' for="chk" aria-hidden="true">Register</label>
                <input className='input' type="text" name="txt" placeholder="Student ID" required=""/>
                <input className='input' type="pin" name="pin" placeholder="Pin" required=""/>
                <input className='input' type="password" name="pin" placeholder="Confirm Pin" required=""/>
                <button className='btn'>Register</button>
              </form>
            </div>

            <div className="login">
              <form>
                <label className='labels' for="chk" aria-hidden="true">Login</label>
                <input className='input' type="text" name="Student Id" placeholder="Student ID" required=""/>
                <input className='input' type="password" name="pin" placeholder="Pin" required=""/>
                <button className='btn'>Login</button>
              </form>
            </div>
      </div> 
    </div>   
    </>
  )
}

export default login