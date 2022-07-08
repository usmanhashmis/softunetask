import React from 'react'
import { useNavigate } from "react-router-dom";
function Login() {
   let navigate = useNavigate();
    const handle=()=>{
        
        let tok = "dcbhebecbr47sssr43rerfnrfernerjer";
        localStorage.setItem("token", tok);
        navigate('/');
    }
  return (
    <div>
    {alert("Login must")}
     <button type="submit" className="btn" onClick={handle}>Login/set token</button>

    </div>
  )
}

export default Login