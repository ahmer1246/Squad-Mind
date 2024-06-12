import React, { useEffect, useState } from 'react';
import './feedbackList.css';
import Feedback from '../feedback/Feedback';
import { getAllFeedback } from '../../services/Services';

interface Feedback {
  id: number;
  name: string;
  feedback: string;
}


const  FeedbackDisplay : React.FC =() =>{

  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await getAllFeedback();
        setFeedbacks(response);
      } catch (error) {
        console.error('Error fetching feedback:', error);
      }
    };

    fetchFeedback();
  }, []);



  return (
    <div className='feedback-display-container'>
      <h1>All Feedback</h1>
      {feedbacks.map((feedback) => (
       <Feedback key={feedback.id} name={ feedback.name} feedback={feedback.feedback} />
      ))}
    </div>
  )
}

export default FeedbackDisplay
