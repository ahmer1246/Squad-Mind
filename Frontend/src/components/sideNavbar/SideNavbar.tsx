import React from 'react'
import './sideNavbar.css'
import { useNavigate } from 'react-router-dom'
const SideNavbar : React.FC = ()=> {
   const navigate = useNavigate();
  return (
    <div className='sideNav'>
      <div className="sideNav-content">

        <button onClick={()=>navigate("/")}>All FeedBack</button>
        <button onClick={()=>navigate("/addfeedback")}> Add FeedBack</button>

      </div>
    </div>
  )
}

export default SideNavbar;
