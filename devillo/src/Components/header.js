import React from 'react';
import Navigation from './navigation';
function Header() {
    return(
        
        <header class="bg-dark navbar-dark navbar">
            <div className="row col-12 d-flex justify-content-center text-white">
                <h3>Registration</h3>
               <nav  className=" col-11 justify-content-center d-flex">
                <Navigation/>
                </nav>
            </div>
        </header>
        
    )
}
export default Header;