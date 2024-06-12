import React from 'react'
import './feedback.css'

interface FeedbackProps {
  name: string;
  feedback: string;
}

const Feedback : React.FC <FeedbackProps>=({name ,feedback})=> {
  return (
    <div className="feedback-container">
        <div className="feedback-content">
            <h4>Feedback</h4>
            <p className='feedback'>{feedback}</p>
            <hr />
            <p className="name">{name}</p>

        </div>
    </div>
  )
}

export default Feedback