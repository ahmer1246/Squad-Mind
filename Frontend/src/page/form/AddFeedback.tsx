import React from 'react';
import "./addFeedback.css"
import {  useForm } from 'react-hook-form';

import { postFeedback } from '../../services/Services';
postFeedback
interface FeedbackFormInputs {
    name: string;
    feedback: string;
  }

const AddFeedback : React.FC = () => {
    const { register, handleSubmit, reset} = useForm<FeedbackFormInputs>();
   
    const onSubmit = async (data: FeedbackFormInputs ) => {
      try {
        await postFeedback(data.name, data.feedback);
        reset();
        // Optionally, you can add logic to update the feedback list
      } catch (error) {
        console.error('Error submitting feedback:', error);
      }
    };
      
      
    
  return (
    <div className='feedback-form-container'>
        <h2>Feedback Form</h2>
        <div className="feedback-form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-fields">
                    <div className="input-field">
                        <input type="text" placeholder='Enter Name' {...register("name",{required:true})} />
                    </div>
                    <div className="input-field">
                       <textarea  rows={8} cols={20}  {...register("feedback",{required:true})} defaultValue="write your feedback here"></textarea>
                    </div>
                    <div className="btn">
                        <button type='submit'>Send Feedback</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddFeedback;