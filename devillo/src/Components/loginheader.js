import React from 'react';
import LoginNav from './loginnav';
function LoginHeader() {
    return(
        
        <header class="bg-dark navbar-dark navbar">
            <div className="row col-12 d-flex justify-content-center text-white">
                <h3>Login</h3>
               <nav  className=" col-11 justify-content-center d-flex">
                <LoginNav/>
                </nav>
            </div>
        </header>
        
    )
}
export default LoginHeader;