import React from "react";
import { Link } from "react-router-dom";

function LoginNav() {
  return (
    <nav>
      <div>
        <Link to="/registration">Sign up</Link>
      </div>
    </nav>
  );
}

export default LoginNav;
