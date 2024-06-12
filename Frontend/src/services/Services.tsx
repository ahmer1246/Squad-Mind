import axios from 'axios';

const url = "http://localhost:4000";

export const getAllFeedback = async () => {
  try {
    const response = await axios.get( url + "/feedback/get")
    return response.data;
  } catch (error) {
    console.error('Error fetching feedback:', error);
    throw error;
  }
};

export const postFeedback = async (name: string, feedback: string) => {
  try {
    await axios.post(url + '/feedback/add', { name, feedback });
  } catch (error) {
    console.error('Error submitting feedback:', error);
    throw error;
  }
};