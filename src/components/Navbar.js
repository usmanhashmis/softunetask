import React from "react";
import { Link,useNavigate } from "react-router-dom";


function Navbar() {
    let navigate = useNavigate();
    const handle=()=>{
        let tok = "dcbhebecbr47sssr43rerfnrfernerjer";
        localStorage.removeItem("token", tok);
        navigate('/');
    }
  return (
    <div>
    <ul>
      <li><Link to="/Name">Name</Link></li> 
      <li><Link to="/Description">Description</Link></li>
      <li><Link to="/Image">Image</Link></li>
      <li><Link to="/CreatedDate">Date</Link></li>
     </ul>
     <button type="submit" className="btn" onClick={handle}>Logout</button>
    </div>
  )
}

export default Navbar