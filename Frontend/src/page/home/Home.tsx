import React from 'react'
import SideNavbar from '../../components/sideNavbar/SideNavbar';
import FeedbackDisplay from '../../components/FeedbackList/FeedbackList';
import "./home.css"
const Home:React.FC =()=> {
  return (
    <div className="content">
    <SideNavbar />
    <FeedbackDisplay />

    </div>
  )
}

export default Home