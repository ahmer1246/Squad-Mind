import { Response, Request } from "express";
import { getAllfeedback, addFeedback } from "../services/feedbackServices";

export const getAllfeedbackHandler = async (req: Request, res: Response): Promise<void> => {
    try {
        const feedback = await getAllfeedback();
        res.json(feedback);
    } catch (error) {
        console.error('Error fetching feedback:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const addFeedbackHandler = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, feedback } = req.body;
        if (!name || !feedback) {
            res.status(400).json({ error: 'Name and feedback are required' });
            return;
        }
        const newFeedback = await addFeedback(name, feedback);
        res.status(201).json(newFeedback);
    } catch (error) {
        console.error('Error adding feedback:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
